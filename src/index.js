(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var defaults = {
    isEmpty: function (value) {
      return !value || (value && value.length === 0);
    },
    keep: false
  };

  nx.compact = function (inTarget, inOptions) {
    var options = nx.mix(null, defaults, inOptions);
    var isEmpty = options.isEmpty;
    var result = [];

    if (options.keep) {
      for (var i = 0; i < inTarget.length; i++) {
        if (isEmpty(inTarget[i])) {
          inTarget.splice(i, 1), i--;
        }
      }
      return inTarget;
    }

    inTarget.forEach(function (value) {
      if (!isEmpty(value)) {
        result.push(value);
      }
    });

    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.compact;
  }
})();
