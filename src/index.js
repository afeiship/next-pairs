(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

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
