(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.pairs should get array pairs value', function () {
      const obj1 = { name: 'fei', email: '1290657123@qq.com' };
      const res = nx.pairs(obj1);
      expect(res).toEqual([
        { key: 'name', value: 'fei' },
        { key: 'email', value: '1290657123@qq.com' }
      ]);
    });
  });
})();
