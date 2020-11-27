(function () {
  require('../src');

  describe('api.basic test', () => {
    var arr1 = [0, 1, false, 2, '', 3];
    var arr2 = [0, 1, false, 2, '', 3, [], [], 'a'];

    test('array: return truthy vaulle', function () {
      var result = nx.compact(arr1);
      expect(result).toEqual([1, 2, 3]);
    });

    test('array in arary shoud detect empty array', function () {
      var result = nx.compact(arr2);
      expect(result).toEqual([1, 2, 3, 'a']);
    });
  });
})();
