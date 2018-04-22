const express = require('express');
const app = express();
const domainAdapter = require('./utils/domain-adapter');

//use middleware for determining request location and set country code.
app.use(domainAdapter);

app.get('/', (req, res) => res.send(`Hello World! ${req.countryCode}`));

app.listen(3000, () => console.log('Example app listening on port 3000!'));