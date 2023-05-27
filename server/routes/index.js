const express = require('express');

const router = express.Router();

const pingRoutes = require('./ping');
const healthCheckRoutes = require('./health-check');
const apiSpecRoutes = require('./api-spec');
const authRoutes = require('./auth');
const blogRoutes = require('./blogs');

pingRoutes(router);
healthCheckRoutes(router);
apiSpecRoutes(router);
authRoutes(router);
blogRoutes(router);

module.exports = router;
