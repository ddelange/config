
var config = require('../'),
    defaults = require('../config/defaults');

module.exports.interface = {};

module.exports.interface.defaults = function(test, common) {
  test('defaults', function(t) {
    t.equal(typeof config.defaults, 'object', 'valid function');
    t.deepEqual(config.defaults, defaults, 'valid function');
    t.end();
  });
}

module.exports.interface.generate = function(test, common) {
  test('generate()', function(t) {
    t.equal(typeof config.generate, 'function', 'valid function');
    t.end();
  });
}

module.exports.all = function (tape, common) {

  function test(name, testFunction) {
    return tape('external interface: ' + name, testFunction)
  }

  for( var testCase in module.exports.interface ){
    module.exports.interface[testCase](test, common);
  }
}