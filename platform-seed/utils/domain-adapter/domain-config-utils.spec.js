
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
const domainConfig = require('./domain-config-utils').DomainConfig;

describe('domain-config-utils class', function () {
    it('should return country code on url', function () {
        expect(domainConfig.getCodeFromDomain("www.de.vanguard")).to.equal("de.inst");
    });
    it('should return url on country code', function () {
        expect(domainConfig.getDomainFromCode("it.inst")).to.equal("it.vanguard");
    });
});