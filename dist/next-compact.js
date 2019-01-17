(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.compact = function(inArray) {
    var result = [];
    for (var index = 0; index < inArray.length; index++) {
      var value = inArray[index];
      value && result.push(value);
    }
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.compact;
  }
})();
