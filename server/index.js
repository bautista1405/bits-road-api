const express = require('express');
const port = 3000;

const compression = require('compression');
const logger = require('morgan');
const bodyParser = require('body-parser');

const products = require('./routes/products')

const app = express();

app.use(compression());
app.use(logger("dev"));
app.use(bodyParser.json());

app.use('/products', products)

app.listen(port, () => console.log(`Example app listening on portttt ${port}!`))
