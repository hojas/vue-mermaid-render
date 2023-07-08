const path = require('node:path')
const shell = require('shelljs')

const demo = path.resolve(__dirname, '../packages/demo/')

shell.cd(demo)
shell.exec('pnpm run dev')
