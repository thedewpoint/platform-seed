
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
const domainAdapter = require('./domain-adapter');
const sinon = require('sinon');
describe('domain-adapter', function() {
    it('set the country code on the request object based on domain', function() {
        let req = {get:(key)=>'vanguardinvestor.co.uk'};
        let res = {};
        let next = sinon.stub();
        domainAdapter(req,res,next);
        expect(req.countryCode).to.equal('uk.ret');
    });
});