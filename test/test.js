var nx = require('next-js-core2');
require('../src/next-compact');

describe('nx.remove', function() {
  var arr1 = [0, 1, false, 2, '', 3];

  test('return truthy vaulle', function() {
    var result = nx.compact(arr1);
    expect(result).toEqual([1, 2, 3]);
  });
});
