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
 * @license
 * Copyright (c) ${pkg.year} ${pkg.author}
 * Released under the ${pkg.license} License.
${dependencies} */`
