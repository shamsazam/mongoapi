const express = require('express');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const jwt = require('express-jwt');

require('dotenv').config();

const logger = require('./utils/logger');
const config = require('./utils/config');
const router = require('./routes');
const PORT = process.env.PORT || 3333;

const app = express();

require('./utils/db');

app.use(cors());
app.use(compression());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    logger.info(`url: ${req.url}, method: ${req.method}`);
    next();
});

app.use(jwt({ secret: config.JWT_SECRET}).unless({path: ["/", "/auth/signup", "/auth/login"]}));

app.use('/', router);

app.listen(PORT, () => logger.info('listening on port '+PORT));

