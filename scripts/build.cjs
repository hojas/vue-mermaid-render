const path = require('node:path')
const shell = require('shelljs')

const source = path.resolve(__dirname, '../packages/vue-mermaid-render/dist/*')
const target = path.resolve(__dirname, '../dist/')

function build() {
  shell.cd(path.resolve(__dirname, '../packages/vue-mermaid-render/'))
  shell.exec('pnpm run build')

  shell.rm('-rf', target)
  shell.mkdir('-p', target)
  shell.cp('-R', source, target)
}

build()
