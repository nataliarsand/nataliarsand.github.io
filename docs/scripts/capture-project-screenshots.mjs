#!/usr/bin/env node

/**
 * Project Screenshot Capture Tool
 *
 * Captures screenshots from various Dev/ projects for the portfolio.
 * Uses Playwright to render pages and Sharp to optimize images.
 *
 * Prerequisites:
 *   npm install playwright sharp
 *   npx playwright install chromium
 *
 * Usage (run from natalia.io directory):
 *   npm run screenshots                              # All projects & viewports (starts servers automatically)
 *   npm run screenshots -- --project=startashtanga   # Single project
 *   npm run screenshots -- --desktop                 # Desktop only
 *   npm run screenshots -- --mobile                  # Mobile only
 *   npm run screenshots -- --no-server               # Don't start servers (use existing)
 */

import { chromium } from 'playwright'
import { mkdir, writeFile } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { spawn } from 'child_process'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT_DIR = join(__dirname, '..', 'assets', 'images', 'screenshots')

// Viewport configurations
const VIEWPORTS = {
  desktop: { width: 1440, height: 900, suffix: '-desktop' },
  mobile: { width: 390, height: 844, suffix: '-mobile' }
}

const HOME = process.env.HOME

/**
 * PROJECT CONFIGURATIONS
 *
 * Each project needs:
 * - name: folder name for output
 * - baseUrl: where the dev server runs
 * - cwd: working directory for the project
 * - startCmd: command to start dev server
 * - startArgs: arguments for the command
 * - screens: array of { name, path } objects
 */
const PROJECTS = {
  startashtanga: {
    name: 'startashtanga',
    baseUrl: 'http://localhost:5173',
    cwd: `${HOME}/Dev/startashtanga`,
    startCmd: 'npm',
    startArgs: ['run', 'dev'],
    screens: [
      { name: 'homepage', path: '/' },
      { name: 'getting-started', path: '/getting-started' },
      { name: 'about', path: '/about' }
    ]
  },

  juliasorts: {
    name: 'juliasorts',
    baseUrl: 'http://localhost:5174',
    cwd: `${HOME}/Dev/juliasorts`,
    startCmd: 'npm',
    startArgs: ['run', 'dev', '--', '--port', '5174'],
    screens: [
      { name: 'homepage', path: '/' }
    ]
  },

  bodymap: {
    name: 'bodymap',
    baseUrl: 'http://localhost:5175',
    cwd: `${HOME}/Dev/bodymap`,
    startCmd: 'npm',
    startArgs: ['run', 'dev', '--', '--port', '5175'],
    screens: [
      { name: 'homepage', path: '/' }
    ]
  },

  mamacircle: {
    name: 'mamacircle',
    baseUrl: 'http://localhost:8080',
    cwd: `${HOME}/Dev/mamacircle`,
    startCmd: 'npm',
    startArgs: ['start'],
    screens: [
      { name: 'homepage', path: '/' }
    ]
  }
}

// Track spawned processes for cleanup
const runningServers = []

/**
 * Start a dev server for a project
 */
function startServer(project) {
  return new Promise((resolve) => {
    console.log(`   Starting ${project.name}...`)

    const proc = spawn(project.startCmd, project.startArgs, {
      cwd: project.cwd,
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: true
    })

    runningServers.push(proc)

    // Give it time to start
    setTimeout(() => resolve(proc), 3000)

    proc.on('error', (err) => {
      console.log(`   ⚠️  Failed to start ${project.name}: ${err.message}`)
      resolve(null)
    })
  })
}

/**
 * Wait for a server to be ready
 */
async function waitForServer(url, maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const response = await fetch(url, { method: 'HEAD' })
      if (response.ok || response.status < 500) return true
    } catch {
      // Server not ready yet
    }
    await new Promise(r => setTimeout(r, 1000))
  }
  return false
}

/**
 * Stop all running servers
 */
function stopAllServers() {
  console.log('\n🛑 Stopping servers...')
  for (const proc of runningServers) {
    if (proc && !proc.killed) {
      proc.kill('SIGTERM')
    }
  }
}

/**
 * Wait for fonts and images to load
 */
async function waitForPageReady(page) {
  await page.waitForFunction(() => document.fonts.ready)
  await page.waitForLoadState('networkidle')
  await page.waitForTimeout(500) // Extra buffer for animations
}

/**
 * Hide common dev tools and overlays
 */
async function hideDevElements(page) {
  await page.evaluate(() => {
    // Common dev tool selectors
    const selectors = [
      '[class*="devtools" i]',
      '[class*="dev-tools" i]',
      '[aria-label*="devtools" i]',
      '[class*="ReactQueryDevtools"]',
      '[class*="debug"]'
    ]

    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.style.display = 'none'
      })
    })
  })
}

/**
 * Capture a single screenshot
 */
async function captureScreen(page, url, viewportConfig) {
  try {
    await page.setViewportSize({
      width: viewportConfig.width,
      height: viewportConfig.height
    })

    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
    await waitForPageReady(page)
    await hideDevElements(page)

    const buffer = await page.screenshot({ type: 'png', fullPage: false })

    // Optimize with sharp
    const optimized = await sharp(buffer)
      .webp({ quality: 85 })
      .toBuffer()

    return optimized
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`)
    return null
  }
}

/**
 * Parse CLI arguments
 */
function parseArgs() {
  const args = process.argv.slice(2)

  // Get specific project if provided
  const projectArg = args.find(a => a.startsWith('--project='))
  const projectName = projectArg ? projectArg.split('=')[1] : null

  // Get viewports
  const hasDesktop = args.includes('--desktop')
  const hasMobile = args.includes('--mobile')
  const viewports = []

  if (!hasDesktop && !hasMobile) {
    // Default: both
    viewports.push(['desktop', VIEWPORTS.desktop], ['mobile', VIEWPORTS.mobile])
  } else {
    if (hasDesktop) viewports.push(['desktop', VIEWPORTS.desktop])
    if (hasMobile) viewports.push(['mobile', VIEWPORTS.mobile])
  }

  // Server management
  const noServer = args.includes('--no-server')

  return { projectName, viewports, noServer }
}

/**
 * Main function
 */
async function main() {
  const { projectName, viewports, noServer } = parseArgs()

  console.log('📸 Project Screenshot Capture Tool\n')
  console.log(`📐 Viewports: ${viewports.map(([n]) => n).join(', ')}`)

  // Filter projects if specific one requested
  const projectsToCapture = projectName
    ? { [projectName]: PROJECTS[projectName] }
    : PROJECTS

  if (projectName && !PROJECTS[projectName]) {
    console.error(`❌ Unknown project: ${projectName}`)
    console.log(`   Available: ${Object.keys(PROJECTS).join(', ')}`)
    process.exit(1)
  }

  // Handle cleanup on exit
  process.on('SIGINT', () => {
    stopAllServers()
    process.exit(0)
  })
  process.on('SIGTERM', () => {
    stopAllServers()
    process.exit(0)
  })

  // Start servers if needed
  if (!noServer) {
    console.log('\n🚀 Starting dev servers...')
    for (const [key, project] of Object.entries(projectsToCapture)) {
      await startServer(project)
    }
    console.log('   Waiting for servers to be ready...')
    await new Promise(r => setTimeout(r, 5000))
  }

  // Launch browser
  console.log('\n🌐 Launching browser...')
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({ deviceScaleFactor: 2 })
  const page = await context.newPage()

  let totalSuccess = 0
  let totalFail = 0

  for (const [key, project] of Object.entries(projectsToCapture)) {
    console.log(`\n📦 Project: ${project.name}`)
    console.log(`   URL: ${project.baseUrl}`)

    // Check if server is running
    const isRunning = await waitForServer(project.baseUrl)
    if (!isRunning) {
      console.log(`   ⚠️  Server not ready after waiting!`)
      console.log(`   Skipping...`)
      continue
    }

    console.log(`   ✅ Server is ready`)

    // Create output directory
    const projectOutputDir = join(OUTPUT_DIR, project.name)
    await mkdir(projectOutputDir, { recursive: true })

    // Capture each screen
    for (const screen of project.screens) {
      const url = `${project.baseUrl}${screen.path}`

      for (const [viewportName, viewportConfig] of viewports) {
        const filename = `${screen.name}${viewportConfig.suffix}.webp`
        process.stdout.write(`   📷 ${screen.name} (${viewportName})...`)

        const screenshot = await captureScreen(page, url, viewportConfig)

        if (screenshot) {
          const outputPath = join(projectOutputDir, filename)
          await writeFile(outputPath, screenshot)
          console.log(' ✅')
          totalSuccess++
        } else {
          console.log(' ❌')
          totalFail++
        }
      }
    }
  }

  await browser.close()

  // Stop servers
  if (!noServer) {
    stopAllServers()
  }

  // Summary
  console.log('\n' + '─'.repeat(40))
  console.log('📊 Summary:')
  console.log(`   ✅ Success: ${totalSuccess}`)
  console.log(`   ❌ Failed: ${totalFail}`)
  console.log(`   📁 Output: ${OUTPUT_DIR}`)
}

main().catch(error => {
  console.error('❌ Fatal error:', error)
  stopAllServers()
  process.exit(1)
})
