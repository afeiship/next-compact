# next-compact
> Returns a copy of the array/object with all falsy values removed.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-compact
```

## usage
```js
import '@jswork/next-compact';

const arr1 = [0, 1, false, 2, '', 3];
const arr2 = [0, 1, false, 2, '', 3, [], [], 'a'];

const result1 = nx.compact(arr);
const result2 = nx.compact(obj);

// [1, 2, 3]
// [1, 2, 3, 'a']
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-compact/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-compact
[version-url]: https://npmjs.org/package/@jswork/next-compact

[license-image]: https://img.shields.io/npm/l/@jswork/next-compact
[license-url]: https://github.com/afeiship/next-compact/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-compact
[size-url]: https://github.com/afeiship/next-compact/blob/master/dist/next-compact.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-compact
[download-url]: https://www.npmjs.com/package/@jswork/next-compact
