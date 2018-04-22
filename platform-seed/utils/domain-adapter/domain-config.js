
const source = require('./domain-config.json');
const config = {...source,...Object.assign({}, ...Object.entries(source).map(([a,b]) => ({ [b]: a })))};
const domains = Object.keys(source);

class DomainConfig {
    constructor(){}
    static getDomainFromCode (code){
        const domain = config[code] || domains[0];
        return domain;
    }

    static getCodeFromDomain(domain) {
        const code = config[domain] || config[domains[0]];   
        return code;
    }
    static isValidDomain (domain){
        return domains.includes(domain);
    }
}
module.exports = {
    DomainConfig: DomainConfig
}