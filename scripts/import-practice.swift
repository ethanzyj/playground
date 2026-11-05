import AppKit
import PDFKit
import Foundation

// Preserve the supplied booklet's equations and diagrams as per-question images.
guard CommandLine.arguments.count == 3,
      let pdf = PDFDocument(url: URL(fileURLWithPath: CommandLine.arguments[1])) else {
    fatalError("Usage: swift scripts/import-practice.swift booklet.pdf output-directory")
}
let output = URL(fileURLWithPath: CommandLine.arguments[2], isDirectory: true)
guard pdf.pageCount == 6 else { fatalError("Expected this booklet's six-page layout") }
try FileManager.default.createDirectory(at: output, withIntermediateDirectories: true)
let regex = try NSRegularExpression(pattern: "(?m)^([0-9]{1,2})\\. ")
var pieces: [Int: [NSImage]] = [:]
for pageIndex in 1..<pdf.pageCount {
    let page = pdf.page(at: pageIndex)!
    let text = (page.string ?? "") as NSString
    let matches = regex.matches(in: text as String, range: NSRange(location: 0, length: text.length))
    var boundaries: [(Int, CGFloat)] = []
    if pageIndex == 4 { boundaries.append((17, 725)) }
    for match in matches {
        let number = Int(text.substring(with: match.range(at: 1)))!
        boundaries.append((number, page.selection(for: match.range)!.bounds(for: page).maxY + 9))
    }
    for (index, boundary) in boundaries.enumerated() {
        let current = boundary.0
        let bottom = index + 1 < boundaries.count ? boundaries[index + 1].1 + 3 : 45
        let rect = NSRect(x: 76, y: bottom, width: 468, height: boundary.1 - bottom)
        let image = NSImage(size: NSSize(width: rect.width * 2.5, height: rect.height * 2.5))
        image.lockFocus()
        NSColor.white.setFill()
        NSRect(origin: .zero, size: image.size).fill()
        let context = NSGraphicsContext.current!.cgContext
        context.scaleBy(x: 2.5, y: 2.5)
        context.translateBy(x: -rect.minX, y: -rect.minY)
        page.draw(with: .mediaBox, to: context)
        image.unlockFocus()
        pieces[current, default: []].append(image)
    }
}
guard Set(pieces.keys) == Set(1...25) else { fatalError("Expected 25 questions") }
for number in 1...25 {
    let parts = pieces[number]!
    let size = NSSize(width: parts.map { $0.size.width }.max()!, height: parts.reduce(0) { $0 + $1.size.height })
    let image = NSImage(size: size)
    image.lockFocus()
    NSColor.white.setFill()
    NSRect(origin: .zero, size: size).fill()
    var y = size.height
    for part in parts {
        y -= part.size.height
        part.draw(in: NSRect(x: 0, y: y, width: part.size.width, height: part.size.height))
    }
    image.unlockFocus()
    let bitmap = NSBitmapImageRep(data: image.tiffRepresentation!)!
    let data = bitmap.representation(using: .png, properties: [:])!
    try data.write(to: output.appendingPathComponent("problem-\(number).png"))
}
print("Imported 25 questions, including the two-page question 17.")
