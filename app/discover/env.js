exports = module.exports = function() {
  
  return function(cb) {
    var v = process.env['ETCD_URL'];
    if (!v) { return process.nextTick(cb); }
    
    return cb(null, [ { url: 'http://etcd' } ], { service: 'ns-etcd-http', protocol: 'tcp' });
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/sd/RegistryDiscoverFunc';
exports['@service'] = 'ns-etcd-http';
exports['@protocol'] = 'tcp';
exports['@require'] = [];
