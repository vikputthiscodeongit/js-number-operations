# number-operations
[![npm](https://img.shields.io/npm/v/@codebundlesbyvik/number-operations)](https://www.npmjs.com/package/@codebundlesbyvik/number-operations)
[![npm - downloads per week](https://img.shields.io/npm/dw/@codebundlesbyvik/number-operations)](https://www.npmjs.com/package/@codebundlesbyvik/number-operations)

JavaScript helper functions for number operations.

<br>

## Installation

``` shell
// Install package from npm
npm install @codebundlesbyvik/number-operations
```

<br>

``` javascript
import getRandomIntUnder from "@codebundlesbyvik/number-operations";
```

<br>

## Functions

### `getRandomIntUnder(max, includeMax)`

Generate and return a random integer below a given number.

⚠️ **Makes use of [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random), which ISN'T cryptographically secure. Do NOT use this for generating secure, random integers.** ⚠️

#### Parameters

**\*** indicates required

 - **\*** `max` (`Number`): Depending on `includeMax`, the returned integer will be either equal to or below this number.
 - `includeMax` (`Boolean`): Whether or not to include `max` when generating the integer. Default is undefined, which functions as `false`.

#### Usage

```javascript
getRandomIntUnder(10)
// > 7

getRandomIntUnder(10, true)
// > 10
```

<br>

## License

MIT © [Viktor Chin-Kon-Sung](https://github.com/vikputthiscodeongit)
