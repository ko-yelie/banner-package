const path = require('path')
const pkg = require(path.resolve(process.cwd(), 'package.json'))

const dependencies = pkg.dependencies
  ? ` *
 * Dependencies
${Object.keys(pkg.dependencies)
      .map(name => ` * https://www.npmjs.com/package/${name}\n`)
      .join('')}`
  : ''

module.exports = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.homepage}
 *
 * (c) ${pkg.year}-present ${pkg.author}
 * Released under the ${pkg.license} License.
${dependencies} */`
