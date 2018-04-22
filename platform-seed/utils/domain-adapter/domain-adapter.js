// import {DomainConfig} from 'domain-config-utils';
const domainConfig = require('./domain-config-utils').DomainConfig;


module.exports = function (req, res, next) {
    const origin = req.get('origin');
    req.countryCode = domainConfig.getCodeFromDomain(origin);
    next();
}