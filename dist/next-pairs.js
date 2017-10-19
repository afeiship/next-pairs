(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.pairs = function (inObject) {
    return nx.map(inObject,function(key,value){
      return { key: key, value: value };
    });
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pairs;
  }

}());
