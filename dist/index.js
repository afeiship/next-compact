/*!
 * name: @jswork/next-compact
 * description: Returns a copy of the array/object with all falsy values removed.
 * homepage: https://github.com/afeiship/next-compact
 * version: 1.0.0
 * date: 2020-11-27 17:17:44
 * license: MIT
 */

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
