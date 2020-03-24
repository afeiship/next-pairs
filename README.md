# next-pairs
> Object key value to pairs for next.

## installation
```bash
npm install -S @feizheng/next-pairs
```

## usage
```js
import '@feizheng/next-pairs';

const obj = { name: 'fei', email: '1290657123@qq.com' };
const res = nx.pairs(obj);
// result
[
  { key: 'name', value: 'fei' },
  { key: 'email', value: '1290657123@qq.com' }
];
```
