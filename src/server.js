(function() {
	
	'use strict';

	var config = require('config')
		, express = require('express')
		, bunyan = require('bunyan')
	
	var app = express()
		, env = process.env.NODE_ENV
	  , port = config.get('server.port')
	  , log = bunyan.createLogger({
		name: config.get('logger.name')
	});

	app.use(require('express-bunyan-logger')({
		format: ":remote-address - :user-agent[major] :url"
	}));
	app.use(require('express-bunyan-logger').errorLogger());
	

	app.get('/', function (req, res) {
		res.send('test');
	})

	app.listen(port, function() {
		log.info(env + ' server active on port ' + port);
	})


})();