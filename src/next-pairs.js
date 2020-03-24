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
