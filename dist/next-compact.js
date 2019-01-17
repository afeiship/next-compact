(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.compact = function(inTarget) {
    var isary = inTarget instanceof Array;
    var result = isary ? [] : {};
    nx.each(inTarget, function(key, value) {
      if (value) {
        isary ? result.push(value) : (result[key] = value);
      }
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.compact;
  }
})();
