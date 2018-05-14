require('zone.js/dist/zone-node');
require('reflect-metadata');
const { enableProdMode } = require('@angular/core');
const express = require('express');
const request = require('request');
const { join } = require('path');
const domainAdapter = require('./utils/domain-adapter');
const { ngExpressEngine } = require('@nguniversal/express-engine');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');


enableProdMode();

const app = express();
const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');
app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }));
  app.set('view engine', 'html');
  app.set('views', join(DIST_FOLDER, 'browser'));

//use middleware for determining request location and set country code.
app.use(domainAdapter);
app.get('/weather/:locationCode', (req,res)=>{
  const BASE_URL = 'https://www.metaweather.com/api/location/'
  console.log(`${BASE_URL}${req.params.locationCode}/`);
  // request(`${BASE_URL}${req.params.locationCode}/`,(error,response,body)=>{
  //   res.json(JSON.parse(body));
  // });
  res.json(require(`./mock/${req.config.countryCode}.mock.json`))
});
app.get('/gatekeeper/:toggleName', (req,res)=>{
  const variablePattern = /\${\w+}/;
  const BASE_URL = 'http://localhost:1337/toggle?name=';
  let toggleName = req.params.toggleName;
  console.log("toggleName",toggleName);
  if(variablePattern.test(toggleName)){
    const regexp = new RegExp(variablePattern);
    const variableName = regexp.exec(req.params.toggleName)[0].replace("{","").replace("}","").replace("$","");
     toggleName = toggleName.replace(variablePattern, req.config[variableName]);
  }
    request(`${BASE_URL}${toggleName}`,(error,response,body)=>{
    res.json(JSON.parse(body));
  });
});

app.get('/config', (req,res)=>{res.json(req.config)});
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));
app.get('*', (req, res) => {
    res.render(join(DIST_FOLDER, 'browser', 'index.html'), { 
      req,
      providers: [{
        provide: 'countryCode',
        useValue: `${req.countryCode}`
      }]
     });
  });
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));