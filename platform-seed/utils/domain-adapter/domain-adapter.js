// import {DomainConfig} from 'domain-config-utils';
const domainConfig = require('./domain-config').DomainConfig;
var UrlPattern = require('url-pattern');
const pattern = new UrlPattern('(http(s)\\://)(:subdomain.):domain.:tld(\\::port)(/*)')


module.exports = function (req, res, next) {
    const {subdomain, domain, tld} = pattern.match(req.headers.host);
    req.countryCode = domainConfig.getCodeFromDomain(`${subdomain}.${domain}.${tld}`);
    // console.log(req.countryCode);
    next();
}