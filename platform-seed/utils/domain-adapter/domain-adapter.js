// import {DomainConfig} from 'domain-config-utils';
const domainConfig = require('./domain-config').DomainConfig;
var UrlPattern = require('url-pattern');
const pattern = new UrlPattern('(http(s)\\://)(:subdomain.):domain.:tld(\\::port)(/*)')


module.exports = function (req, res, next) {
    try {
    const {subdomain, domain, tld} = pattern.match(req.headers.host);
    let countryCode;
    if(req.query.countryCode) {
        countryCode = req.query.countryCode;
    } else {
        countryCode = domainConfig.getCodeFromDomain(`${domain}.${tld}`);
    }
    req.config = {countryCode,...require(`../../config/${countryCode}`)};
    res.setHeader("Access-Control-Allow-Origin", "*");
    } catch(e){}
   
    next();
}