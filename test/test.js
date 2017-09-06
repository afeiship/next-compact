var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-compact');

describe('nx.remove', function () {

  var arr1 = [0, 1, false, 2, '', 3];

  it('return truthy vaulle', function () {
    var result = nx.compact(arr1);
    assert.deepEqual( result, [1,2,3]);
  });

});
