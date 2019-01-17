var nx = require('next-js-core2');
require('../src/next-compact');

describe('nx.remove', function() {
  var arr1 = [0, 1, false, 2, '', 3];
  var obj = {
    name: 'fei',
    age: 0,
    test: 12,
    ni: null,
    tes2: undefined
  };

  test('array: return truthy vaulle', function() {
    var result = nx.compact(arr1);
    expect(result).toEqual([1, 2, 3]);
  });

  test('object: return truthy vaulle', function() {
    var result = nx.compact(obj);
    expect(result).toEqual({ name: 'fei', test: 12 });
  });
});
