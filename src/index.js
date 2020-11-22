(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.compact = function (inTarget) {
    var isary = Array.isArray(inTarget);
    var result = isary ? [] : {};
    nx.each(inTarget, function (key, value) {
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
