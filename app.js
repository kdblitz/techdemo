'use strict';

var environment = process.env.NODE_ENV || 'development';

var config = require('./config/' + environment + '.config');
require('./backend/server')(config);
