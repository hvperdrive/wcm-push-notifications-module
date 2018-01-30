"use strict";

angular.module("wcm-test_0.1.0")
	.config([

		"$stateProvider",
		"testConfigProvider",

		function ($stateProvider, testConfigProvider) {

			var moduleFolder = testConfigProvider.API.modulePath;

			$stateProvider

				.state("pelorus.push-notifications.index", {
					url: "",
					access: {
						requiresLogin: true
					},
					resolve: {
						ListData: ["testFactory", function (testFactory) {
							return testFactory.read().$promise;
						}]
					},
					ncyBreadcrumb: {
						label: "{{breadcrumb}}"
					},
					views: {
						"": {
							templateUrl: moduleFolder + "views/overview.html",
							controller: "testOverviewController"
						}
					}
				});
		}

	]);
