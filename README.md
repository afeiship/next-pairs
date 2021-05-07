# next-pairs
> Object key value to pairs for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-pairs
```

## usage
```js
import '@jswork/next-pairs';

const obj = { name: 'fei', email: '1290657123@qq.com' };
const res = nx.pairs(obj);

// result
[
  { key: 'name', value: 'fei' },
  { key: 'email', value: '1290657123@qq.com' }
];
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-pairs/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-pairs
[version-url]: https://npmjs.org/package/@jswork/next-pairs

[license-image]: https://img.shields.io/npm/l/@jswork/next-pairs
[license-url]: https://github.com/afeiship/next-pairs/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-pairs
[size-url]: https://github.com/afeiship/next-pairs/blob/master/dist/next-pairs.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-pairs
[download-url]: https://www.npmjs.com/package/@jswork/next-pairs
