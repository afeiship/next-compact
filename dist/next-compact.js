/*!
 * name: @feizheng/next-compact
 * description: Returns a copy of the array/object with all falsy values removed.
 * url: https://github.com/afeiship/next-compact
 * version: 1.0.0
 * date: 2020-02-17 13:06:56
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.compact = function(inTarget) {
    var isary = Array.isArray(inTarget);
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

//# sourceMappingURL=next-compact.js.map
