/*!
 * name: @feizheng/next-pairs
 * description: Object key value to pairs for next.
 * url: https://github.com/afeiship/next-pairs
 * version: 1.0.0
 * date: 2020-03-24 12:36:53
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.pairs = function(inObject) {
    var res = [];
    nx.forIn(inObject, function(key, value) {
      res.push({ key: key, value: value });
    });
    return res;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pairs;
  }
})();

//# sourceMappingURL=next-pairs.js.map
