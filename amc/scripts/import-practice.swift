import AppKit
import PDFKit
import Foundation

// Preserve the supplied booklet's equations and diagrams as per-question images.
guard (3...4).contains(CommandLine.arguments.count),
      let pdf = PDFDocument(url: URL(fileURLWithPath: CommandLine.arguments[1])) else {
    fatalError("Usage: swift scripts/import-practice.swift booklet.pdf output-directory [practice-2|practice-2-chinese]")
}
let source = URL(fileURLWithPath: CommandLine.arguments[1])
let output = URL(fileURLWithPath: CommandLine.arguments[2], isDirectory: true)
let layout = CommandLine.arguments.count == 4 ? CommandLine.arguments[3] : "practice-1"
let chinese = layout == "practice-2-chinese"
let secondPaper = layout == "practice-2" || chinese
guard ["practice-1", "practice-2", "practice-2-chinese"].contains(layout) else { fatalError("Unknown booklet layout") }
guard pdf.pageCount == (chinese ? 7 : 6) else { fatalError("Unexpected page count for \(layout)") }
try FileManager.default.createDirectory(at: output, withIntermediateDirectories: true)
let regex = try NSRegularExpression(pattern: chinese ? "(?m)^([0-9]{1,2})\\.\\s*" : "(?m)^([0-9]{1,2})\\. ")
var pieces: [Int: [NSImage]] = [:]
for pageIndex in 1..<pdf.pageCount {
    let page = pdf.page(at: pageIndex)!
    let text = (page.string ?? "") as NSString
    let matches = regex.matches(in: text as String, range: NSRange(location: 0, length: text.length))
    var boundaries: [(Int, CGFloat)] = []
    if !secondPaper && pageIndex == 4 { boundaries.append((17, 725)) }
    for match in matches {
        let number = Int(text.substring(with: match.range(at: 1)))!
        boundaries.append((number, page.selection(for: match.range)!.bounds(for: page).maxY + 9))
    }
    for (index, boundary) in boundaries.enumerated() {
        let current = boundary.0
        var bottom = index + 1 < boundaries.count ? boundaries[index + 1].1 + 3 : (secondPaper && current == 25 ? 330 : 45)
        var bodyBounds: CGRect?
        if chinese {
            let start = matches[index].range.location
            let end = index + 1 < matches.count ? matches[index + 1].range.location : text.length
            let range = NSRange(location: start, length: end - start)
            bodyBounds = page.selection(for: range)!.bounds(for: page)
            guard ["(A)", "(B)", "(C)", "(D)", "(E)"].allSatisfy({ text.substring(with: range).contains($0) }) else {
                fatalError("Missing choices for Chinese question \(current)")
            }
            if index == boundaries.count - 1 { bottom = bodyBounds!.minY - 10 }
        }
        let rect = NSRect(x: 76, y: bottom, width: chinese ? 480 : 468, height: boundary.1 - bottom)
        guard rect.height > 0 else { fatalError("Invalid crop for question \(current)") }
        if let bounds = bodyBounds, !rect.contains(bounds) { fatalError("Clipped text for Chinese question \(current)") }
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
if chinese && pieces.values.contains(where: { $0.count != 1 }) { fatalError("Expected one crop per Chinese question") }
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
    try data.write(to: output.appendingPathComponent("\(chinese ? "chinese" : "problem")-\(number).png"))
}
if chinese {
    let destination = output.appendingPathComponent("chinese-booklet.pdf")
    if FileManager.default.fileExists(atPath: destination.path) {
        guard try Data(contentsOf: source) == Data(contentsOf: destination) else { fatalError("A different Chinese booklet already exists") }
    } else {
        try FileManager.default.copyItem(at: source, to: destination)
    }
}
print(chinese ? "Imported 25 Chinese questions and the source booklet." : secondPaper ? "Imported 25 questions from practice-2." : "Imported 25 questions, including the two-page question 17.")
