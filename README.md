# next-compact
> Returns a copy of the array with all falsy values removed.

## installl:
```bash
npm install -S afeiship/next-compact --registry=https://registry.npm.taobao.org
```

## usage:
```js
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
