/**
 * Module dependencies.
 */
var uri = require('url')
  , etcd = require('sd-etcd')


exports = module.exports = function() {
  var Registry = require('sd-etcd').Registry;
  
  var registry = new Registry();
  return registry;
}

/**
 * Component annotations.
 */
exports['@singleton'] = true;
exports['@require'] = [];
exports['@implements'] = 'http://i.bixbyjs.org/sd/Registry';
exports['@initializer'] = './init.d/connect';
