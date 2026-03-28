---
layout: work
title: "Readdown"
subtitle: "A clean, fast Markdown reader for macOS"
description: >
  A lightweight native macOS app for reading Markdown files - nothing more, nothing less.
  Double-click any .md file and get beautiful, GitHub-style rendering without the overhead of a code editor.

image: "/assets/images/works/readdown/readdown-icon.png"

deliverables:
  - label: Instant Open
    description: Double-click any .md file - no project loading, no workspace setup
  - label: GitHub-Style Rendering
    description: Headings, lists, tables, code blocks, and task lists rendered the way you expect
  - label: Syntax Highlighting
    description: 19 languages auto-detected, or specify the language on your code fence
  - label: Mermaid Diagrams
    description: Flowcharts, sequence diagrams, pie charts rendered natively from code blocks
  - label: Light & Dark Mode
    description: Follows your system appearance automatically
  - label: Read-Only by Design
    description: Your files stay untouched - no accidental edits, no auto-formatting surprises
  - label: Quick Look Preview
    description: Press spacebar on any .md file in Finder to see it rendered instantly
  - label: Native macOS App
    description: Built with Swift and SwiftUI - lightweight, fast, and private
  - label: Default Reader
    description: Replace Xcode, TextEdit, or VS Code as your .md handler in one click

collaboration:
  - Self-initiated project with AI pair-programming
---

---

### Situation

Every developer has Markdown files scattered across their machine - READMEs, notes, documentation, meeting agendas. On macOS, double-clicking one opens Xcode, VS Code, or TextEdit. Heavy tools for a simple read.

---

### Task

Build a native macOS Markdown reader that opens instantly, renders beautifully, and stays out of the way. No editing, no clutter, no telemetry.

---

### Action

I designed and built **Readdown** with Swift and SwiftUI, using Claude Code as a pair-programming partner.

<div class="device-showcase">
  <div class="device-frame desktop">
    <img loading="lazy" src="/assets/images/works/readdown/app-screenshot-1.png" alt="Readdown rendering headings and lists" class="work-image">
  </div>
  <div class="device-frame desktop">
    <img loading="lazy" src="/assets/images/works/readdown/app-screenshot-3.png" alt="Readdown rendering tables and formatted text" class="work-image">
  </div>
</div>
<p class="work-image-caption">Readdown rendering a Markdown document with headings, lists, tables, and formatted text</p>

**Instant Open**
Double-click any `.md` file and it opens immediately. No project loading, no workspace setup.

**GitHub-Style Rendering**
Headings, lists, tables, code blocks, task lists - rendered the way you'd see them on GitHub.

**Syntax Highlighting**
Code blocks with a language tag get grammar-based highlighting. Bare blocks are auto-detected from 19 common languages.

**Mermaid Diagrams**
Use `mermaid` as the language on a code block and it renders as a diagram - flowcharts, sequence diagrams, pie charts.

<div class="device-showcase">
  <div class="device-frame desktop">
    <img loading="lazy" src="/assets/images/works/readdown/app-screenshot-2.png" alt="Readdown rendering code blocks and task lists" class="work-image">
  </div>
</div>
<p class="work-image-caption">Code blocks and task lists rendered with familiar GitHub styling</p>

**Quick Look**
Press spacebar on any `.md` in Finder and see it rendered right there.

**Read-Only by Design**
Your files stay untouched. Readdown is a reader, not an editor.

---

### Result

**Readdown** is live at <a href="https://heya.studio/readdown" target="_blank" rel="noopener">heya.studio/readdown</a> with the source on <a href="https://github.com/nataliarsand/readdown" target="_blank" rel="noopener">GitHub</a>.

- Does one thing well
- Real users with automatic updates
- Active feedback via <a href="https://github.com/nataliarsand/readdown/issues" target="_blank" rel="noopener">GitHub Issues</a>

Built with Swift, SwiftUI, and WebKit. The kind of tool I wished existed, so I built it.
