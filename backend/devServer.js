'use strict';

var environment = process.env.NODE_ENV || 'local';

var config = require('../config/' + environment + '.config');
require('./server')(config);
