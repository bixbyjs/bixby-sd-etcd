/**
 * Expose component suite.
 */
exports = module.exports = function sdEtcd(id) {
  var map = {
    'registry': './registry',
    'init.d/connect': './init.d/connect'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};
