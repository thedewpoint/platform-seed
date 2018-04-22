
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
const domainConfig = require('./domain-config').DomainConfig;

describe('domain-config-utils class', function () {
    it('should return country code on url', function () {
        expect(domainConfig.getCodeFromDomain("www.de.vanguard")).to.equal("de.inst");
    });
    it('should return url on country code', function () {
        expect(domainConfig.getDomainFromCode("it.inst")).to.equal("it.vanguard");
    });
    it('should return true on valid domain and false on invalid', function () {
        expect(domainConfig.isValidDomain("test.com")).to.equal(false);
        expect(domainConfig.isValidDomain("it.vanguard")).to.equal(true);

    });
});