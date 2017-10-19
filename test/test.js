var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-pairs');

describe('next/pairs', function () {

  it('nx.pairs', function () {
    var obj1 = {name: 'fei',email: '1290657123@qq.com'};


    var res = nx.pairs(obj1);

    console.log(res);

    assert.equal(res[0].key, 'name');
    assert.equal(res[1].value, '1290657123@qq.com');
  });

});
