const process = require('node:process')
const path = require('node:path')
const shell = require('shelljs')

const demo = path.resolve(__dirname, '../packages/demo/')
const nuxtDemo = path.resolve(__dirname, '../packages/nuxt-demo/')

function runDemo() {
  shell.cd(demo)
  shell.exec('pnpm run dev')
}

function runNuxtDemo() {
  shell.cd(nuxtDemo)
  shell.exec('pnpm run dev')
}

let demoType = ''
try {
  demoType = process.argv[2].split('=')[1]
}
catch {}

const demoMap = {
  vue: runDemo,
  nuxt: runNuxtDemo,
}

if (!demoType) {
  console.log('demo type is required')
  console.log('demo type: vue or nuxt')
  console.log('example: pnpm dev --demo=vue')
  process.exit(1)
}

if (!demoMap[demoType]) {
  console.error('demo type error')
  console.log('demo type: vue or nuxt')
  console.log('example: pnpm dev --demo=vue')
  process.exit(1)
}

console.log(`run ${demoType} demo`)

demoMap[demoType]()
