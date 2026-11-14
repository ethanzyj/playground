import Foundation
import PDFKit
import AppKit
import CryptoKit

guard CommandLine.arguments.count == 3 else {
    fatalError("Usage: swift scripts/import-practice-bilingual-solutions.swift source.pdf output-directory")
}
let source = URL(fileURLWithPath: CommandLine.arguments[1])
let output = URL(fileURLWithPath: CommandLine.arguments[2], isDirectory: true)
guard let document = PDFDocument(url: source), document.pageCount == 26,
      let index = document.page(at: 0)?.string else {
    fatalError("Expected the supplied 26-page AMC 10B bilingual solutions document")
}
let indexPattern = try NSRegularExpression(pattern: "(?m)^([0-9]{2}) ([A-E])$")
let indexText = index as NSString
var indexAnswers: [Int: String] = [:]
for match in indexPattern.matches(in: index, range: NSRange(location: 0, length: indexText.length)) {
    let number = Int(indexText.substring(with: match.range(at: 1)))!
    guard indexAnswers[number] == nil else { fatalError("Duplicate answer index entry") }
    indexAnswers[number] = indexText.substring(with: match.range(at: 2))
}
guard Set(indexAnswers.keys) == Set(1...25) else { fatalError("Incomplete answer index") }
let numberPattern = try NSRegularExpression(pattern: "(?m)^([0-9]{2}) ")
let answerPattern = try NSRegularExpression(pattern: "(?m)^[A-E]$")
var answers: [String: String] = [:]
for number in 1...25 {
    guard let page = document.page(at: number), let text = page.string,
          text.contains("中文解答"), text.contains("English solution") else {
        fatalError("Missing bilingual solution \(number)")
    }
    let string = text as NSString
    let numbers = numberPattern.matches(in: text, range: NSRange(location: 0, length: string.length)).filter {
        let bounds = page.selection(for: $0.range)!.bounds(for: page)
        return bounds.minX < 100 && bounds.minY > 695
    }
    guard numbers.count == 1,
          Int(string.substring(with: numbers[0].range(at: 1))) == number else {
        fatalError("Unexpected problem number on solution page \(number + 1)")
    }
    let badges = answerPattern.matches(in: text, range: NSRange(location: 0, length: string.length)).filter {
        let bounds = page.selection(for: $0.range)!.bounds(for: page)
        return bounds.minX > 500 && bounds.minY > 700
    }
    guard badges.count == 1,
          string.substring(with: badges[0].range) == indexAnswers[number] else {
        fatalError("Answer index and solution badge disagree for question \(number)")
    }
    answers["2026-practice-2-\(number)"] = indexAnswers[number]!
}
try FileManager.default.createDirectory(at: output, withIntermediateDirectories: true)
let sourceData = try Data(contentsOf: source)
let destination = output.appendingPathComponent("solutions.pdf")
if FileManager.default.fileExists(atPath: destination.path) {
    guard try Data(contentsOf: destination) == sourceData else { fatalError("A different solutions.pdf already exists") }
} else {
    try sourceData.write(to: destination)
}

for number in 1...25 {
    let page = document.page(at: number)!
    let rect = CGRect(x: 36, y: 44, width: 540, height: 698)
    let scale: CGFloat = 2.5
    let width = Int(rect.width * scale), height = Int(rect.height * scale)
    guard let bitmap = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: width,
        pixelsHigh: height, bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true,
        isPlanar: false, colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0),
        let context = NSGraphicsContext(bitmapImageRep: bitmap) else {
        fatalError("Unable to render solution \(number)")
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
        fatalError("Unable to read rendered solution \(number)")
    }
    var lastRow = height - 1
    while lastRow > 0 {
        let row = pixels + lastRow * bitmap.bytesPerRow
        if (0..<width).contains(where: { x in
            let pixel = row + x * 4
            return pixel[0] < 245 || pixel[1] < 245 || pixel[2] < 245
        }) { break }
        lastRow -= 1
    }
    guard let cropped = fullImage.cropping(to: CGRect(x: 0, y: 0, width: width, height: min(height, lastRow + 20))),
          let png = NSBitmapImageRep(cgImage: cropped).representation(using: .png, properties: [:]) else {
        fatalError("Unable to encode solution \(number)")
    }
    try png.write(to: output.appendingPathComponent("solution-\(number).png"))
    let single = PDFDocument()
    single.insert(page.copy() as! PDFPage, at: 0)
    guard single.write(to: output.appendingPathComponent("solution-\(number).pdf")) else {
        fatalError("Unable to save individual solution PDF \(number)")
    }
}
let key: [String: Any] = [
    "paperId": "2026-practice-2",
    "sourceName": "User-supplied 10B_Bilingual_Illustrated_Solutions.pdf",
    "sourceSha256": SHA256.hash(data: sourceData).map { String(format: "%02x", $0) }.joined(),
    "sourceNote": "The answer index on page 1 agrees with the answer badge on each of pages 2–26. Solution reminders match the supplied 2026 AMC 10B booklet. These are the supplied document's independently derived answers, not an official MAA answer key.",
    "answers": answers
]
let data = try JSONSerialization.data(withJSONObject: key, options: [.prettyPrinted, .sortedKeys])
try data.write(to: output.appendingPathComponent("answer-key.json"))
print("Imported 25 bilingual solution images, 25 individual PDFs, the supplied answer key and source PDF.")
