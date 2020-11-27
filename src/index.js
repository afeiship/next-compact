(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var isEmpty = function (value) {
    return !value || (value && value.length === 0);
  };

  nx.compact = function (inTarget, inCallback) {
    var callback = inCallback || isEmpty;
    var result = [];
    inTarget.forEach(function (value) {
      if (!callback(value)) {
        result.push(value);
      }
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.compact;
  }
})();
