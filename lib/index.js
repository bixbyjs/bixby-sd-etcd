/**
 * Expose component suite.
 */
exports = module.exports = function common(id) {
  var map = {
    'registry': './registry'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};
