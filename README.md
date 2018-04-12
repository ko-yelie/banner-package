# banner-package
Generate banner from package.json

package.json
```json
{
  "name": "banner-package",
  "version": "1.0.0",
  "author": "Ko.Yelie",
  "license": "MIT",
  "year": 2018,
  "homepage": "https://github.com/ko-yelie/banner-package#readme",
  "dependencies": {
    "noop-es2015": "^1.0.1"
  }
}
```

Output
```js
/*!
 * banner-package v1.0.0
 * https://github.com/ko-yelie/banner-package#readme
 *
 * @license
 * Copyright (c) 2018 Ko.Yelie
 * Released under the MIT License.
 *
 * Dependencies
 * https://www.npmjs.com/package/noop-es2015
 */
 ```
