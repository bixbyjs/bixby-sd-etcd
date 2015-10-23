exports = module.exports = function(settings) {
  var Registry = require('etcd-sd').Registry;
  
  
  var options = settings.toObject();
  var registry = new Registry(options);
  return registry;
}

/**
 * Component annotations.
 */
exports['@require'] = [ '$settings' ];
exports['@singleton'] = true;
exports['@implements'] = 'http://i.bixbyjs.org/sd/Registry';
exports['@initializer'] = './init.d/connect';
