# next-compact
> Returns a copy of the array/object with all falsy values removed.

## installation
```bash
npm install -S @feizheng/next-compact
```

## usage
```js
import '@feizheng/next-compact';

var arr1 = [0, 1, false, 2, '', 3];
var obj = {
  name: 'fei',
  age: 0,
  test: 12,
  ni: null,
  tes2: undefined
};

var result1 = nx.compact(arr);
var result2 = nx.compact(obj);
// [1, 2, 3]
// { name: 'fei', test: 12 }
```
