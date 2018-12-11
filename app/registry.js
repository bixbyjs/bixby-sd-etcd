exports = module.exports = function(url) {
  var Registry = require('etcd-sd').Registry;
  
  console.log('CREATE ETCD REGISTRY!');
  console.log(url)
  
  // TODO: Pass url into here.
  var registry = new Registry();
  return registry;
};

exports['@implements'] = 'http://i.bixbyjs.org/sd/Registry';
exports['@service'] = 'ns-etcd-http';
exports['@protocol'] = 'tcp';
exports['@uri-scheme'] = 'http';
exports['@require'] = [
  ':url'
];
