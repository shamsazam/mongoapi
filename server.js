const express = require('express');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const router = require('./routes');

const PORT = process.env.PORT | 3333;

const app = express();

require('./utils/db');

app.use(cors());
app.use(compression());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);

app.listen(PORT, () => console.log('listening on port '+PORT));

