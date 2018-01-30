"use strict";

angular.module("wcm-test_0.1.0.directives", []);
angular.module("wcm-test_0.1.0.factories", []);
angular.module("wcm-test_0.1.0.services", ["wcm-test_0.1.0.factories"]);
angular.module("wcm-test_0.1.0.controllers", ["wcm-test_0.1.0.services"]);

angular.module("wcm-test_0.1.0", [

	"pelorus.services",

	"wcm-test_0.1.0.directives",
	"wcm-test_0.1.0.factories",
	"wcm-test_0.1.0.services",
	"wcm-test_0.1.0.controllers"

])
.run([function () {
	console.log("Test module is available!"); // eslint-disable-line no-console
}]);
