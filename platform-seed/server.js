require('zone.js/dist/zone-node');
require('reflect-metadata');
const { enableProdMode } = require('@angular/core');
const express = require('express');
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
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));
app.get('*', (req, res) => {
    res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req });
  });
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));