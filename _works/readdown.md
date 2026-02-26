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
  - label: Light & Dark Mode
    description: Follows your system appearance automatically
  - label: Read-Only by Design
    description: Your files stay untouched - no accidental edits, no auto-formatting surprises
  - label: Native macOS App
    description: Built with Swift and SwiftUI - lightweight, fast, and private
  - label: Default Reader
    description: Replace Xcode, TextEdit, or VS Code as your .md handler in one click

collaboration:
  - Self-initiated project with AI pair-programming
---

---

### Situation

Every developer has Markdown files scattered across their machine - READMEs, notes, documentation, meeting agendas. On macOS, double-clicking one of these files opens it in Xcode, VS Code, or TextEdit. Heavy tools for a simple read. You don't want an IDE to spin up just to skim a README. You don't want a text editor that shows you raw syntax. You just want to read the thing.

---

### Task

Build a lightweight, native macOS Markdown reader. Something that opens instantly, renders beautifully, and stays out of the way. No editing, no clutter, no telemetry - just reading.

---

### Action

I designed and built **Readdown**, a native macOS app with Swift and SwiftUI. The whole thing was vibe-coded with Claude Code - a true AI pair-programming build from start to finish.

<div class="device-showcase">
  <div class="device-frame desktop">
    <img loading="lazy" src="/assets/images/works/readdown/app-screenshot-1.png" alt="Readdown rendering headings and lists" class="work-image">
  </div>
  <div class="device-frame desktop">
    <img loading="lazy" src="/assets/images/works/readdown/app-screenshot-3.png" alt="Readdown rendering tables and formatted text" class="work-image">
  </div>
</div>
<p class="work-image-caption">Readdown rendering a Markdown document with headings, lists, tables, and formatted text</p>

#### Features built

**Instant Open**
Double-click any `.md` file and it opens immediately. No project loading, no workspace setup, no waiting. It just opens.

**GitHub-Style Rendering**
Headings, lists, tables, code blocks with syntax highlighting, task lists - all rendered cleanly, the way you'd see them on GitHub.

<div class="device-showcase">
  <div class="device-frame desktop">
    <img loading="lazy" src="/assets/images/works/readdown/app-screenshot-2.png" alt="Readdown rendering code blocks and task lists" class="work-image">
  </div>
</div>
<p class="work-image-caption">Code blocks and task lists rendered with familiar GitHub styling</p>

**Light & Dark Mode**
Follows your system appearance automatically. No settings to toggle - it just works.

**Read-Only by Design**
Your files stay untouched. No accidental edits, no auto-formatting surprises. Readdown is a reader, not an editor.

**Set as Default Reader**
Replace Xcode, TextEdit, or VS Code as your default `.md` handler in one click. Every Markdown file on your machine opens beautifully from that point on.

---

### Result

**Readdown** is live at <a href="https://heya.studio/readdown" target="_blank" rel="noopener">heya.studio/readdown</a> with the source code on <a href="https://github.com/nataliarsand/readdown" target="_blank" rel="noopener">GitHub</a>.

- A tiny, focused app that does one thing well
- Solves a real daily annoyance for anyone who works with Markdown
- My first native macOS app - fully vibe-coded with Claude Code

Built with Swift, SwiftUI, and WebKit. Readdown is the kind of tool I wished existed, so I built it.
