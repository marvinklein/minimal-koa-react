const proxy = require('http-proxy-middleware');

module.exports = function(app) {
	if(process.env.npm_package_proxy) {
		app.use(proxy('/api', { target: process.env.npm_package_proxy }));
	}
};
