// import {DomainConfig} from 'domain-config-utils';
const domainConfig = require('./domain-config').DomainConfig;
var UrlPattern = require('url-pattern');
const pattern = new UrlPattern('(http(s)\\://)(:subdomain.):domain.:tld(\\::port)(/*)')


module.exports = function (req, res, next) {
    const {subdomain, domain, tld} = pattern.match(req.headers.host);
    const countryCode = domainConfig.getCodeFromDomain(`${subdomain}.${domain}.${tld}`);
    req.config = {countryCode,...require(`../../config/${countryCode}`)};
    res.setHeader("Access-Control-Allow-Origin", "*");
    // console.log("response " +res.setHeader());
    next();
}