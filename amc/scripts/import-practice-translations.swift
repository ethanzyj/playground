import Foundation
import PDFKit
import AppKit

func fail(_ message: String) -> Never {
    fputs(message + "\n", stderr)
    exit(1)
}

guard CommandLine.arguments.count == 3 else {
    fail("Usage: swift scripts/import-practice-translations.swift source.pdf output-directory")
}
let source = URL(fileURLWithPath: CommandLine.arguments[1])
let output = URL(fileURLWithPath: CommandLine.arguments[2], isDirectory: true)
guard let document = PDFDocument(url: source), document.pageCount == 26 else {
    fail("Expected the supplied 26-page bilingual answer document.")
}
let keyData = try Data(contentsOf: output.appendingPathComponent("answer-key.json"))
let key = try JSONSerialization.jsonObject(with: keyData) as! [String: Any]
let answers = key["answers"] as! [String: String]

func marker(_ text: String, page: PDFPage) -> CGRect {
    let matches = document.findString(text, withOptions: []).filter {
        $0.pages.contains(page) && $0.bounds(for: page).minX < 60
    }
    guard matches.count == 1 else { fail("Expected one body marker: \(text)") }
    return matches[0].bounds(for: page)
}

func image(_ page: PDFPage, rect: CGRect, name: String) throws {
    let scale: CGFloat = 2.5
    let width = Int(ceil(rect.width * scale))
    let height = Int(ceil(rect.height * scale))
    guard let bitmap = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: width,
        pixelsHigh: height, bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true,
        isPlanar: false, colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0),
        let context = NSGraphicsContext(bitmapImageRep: bitmap) else {
        fail("Unable to create image \(name)")
    }
    NSGraphicsContext.saveGraphicsState()
    NSGraphicsContext.current = context
    let cg = context.cgContext
    cg.setFillColor(NSColor.white.cgColor)
    cg.fill(CGRect(x: 0, y: 0, width: width, height: height))
    cg.scaleBy(x: scale, y: scale)
    cg.translateBy(x: -rect.minX, y: -rect.minY)
    page.draw(with: .mediaBox, to: cg)
    NSGraphicsContext.restoreGraphicsState()
    guard let pixels = bitmap.bitmapData, let fullImage = bitmap.cgImage else {
        fail("Unable to read image \(name)")
    }
    var lastRow = height - 1
    while lastRow > 0 {
        let row = pixels + lastRow * bitmap.bytesPerRow
        let hasInk = (0..<width).contains { x in
            let pixel = row + x * 4
            return pixel[0] < 245 || pixel[1] < 245 || pixel[2] < 245
        }
        if hasInk { break }
        lastRow -= 1
    }
    guard let cropped = fullImage.cropping(to: CGRect(x: 0, y: 0, width: width,
        height: min(height, lastRow + 20))),
        let png = NSBitmapImageRep(cgImage: cropped).representation(using: .png, properties: [:]) else {
        fail("Unable to encode image \(name)")
    }
    try png.write(to: output.appendingPathComponent(name))
}

for number in 1...25 {
    guard let page = document.page(at: number), let text = page.string else {
        fail("Missing question \(number)")
    }
    let expression = try NSRegularExpression(pattern: "正确答案[：:]\\s*([A-E])")
    let matches = expression.matches(in: text, range: NSRange(text.startIndex..., in: text))
    guard matches.count == 1,
        let range = Range(matches[0].range(at: 1), in: text),
        String(text[range]) == answers["2026-practice-1-\(number)"] else {
        fail("Answer mismatch for question \(number)")
    }
    let translation = marker("中文翻译", page: page)
    let answerSelections = document.findString("正确答案", withOptions: []).filter { $0.pages.contains(page) }
    guard answerSelections.count == 1 else { fail("Missing answer marker") }
    let answer = answerSelections[0].bounds(for: page)
    let footer = marker("逐题解答与复核", page: page)
    let right = page.bounds(for: .mediaBox).width - 36
    let translationBottom = answer.maxY + 10
    guard translation.maxY + 5 > translationBottom else { fail("Invalid translation crop") }
    try image(page, rect: CGRect(x: 36, y: translationBottom, width: right - 36,
        height: translation.maxY + 5 - translationBottom), name: "chinese-\(number).png")
    try image(page, rect: CGRect(x: 36, y: footer.maxY + 12, width: right - 36,
        height: answer.maxY + 8 - footer.maxY - 12), name: "solution-\(number).png")
}
let destination = output.appendingPathComponent("solutions.pdf")
if FileManager.default.fileExists(atPath: destination.path) {
    guard try Data(contentsOf: source) == Data(contentsOf: destination) else {
        fail("A different solutions.pdf already exists.")
    }
} else {
    try FileManager.default.copyItem(at: source, to: destination)
}
print("Imported 25 Chinese statements, 25 worked solutions and the source PDF.")
