var routes = require("./routes");

module.exports = function (app) {
	// Setup routes
	routes(app);
};

// Expose API
module.exports.api = require("./api");
