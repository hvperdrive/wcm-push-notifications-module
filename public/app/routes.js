"use strict";

angular.module("wcm-test_0.1.0")
	.config([

		"$stateProvider",
		"testConfigProvider",

		function ($stateProvider, testConfigProvider) {

			var moduleFolder = testConfigProvider.API.modulePath;

			$stateProvider

				.state("pelorus.test.index", {
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
				})

			// .state("pelorus.test.edit", {
			//     url: "/{uuid}",
			//     access: {
			//         requiresLogin: true
			//     },
			//     resolve: {
			//         InstanceData: ["testFactory", "$stateParams", function(testFactory, $stateParams) {
			//             if ($stateParams.uuid && $stateParams.uuid !== "new") {
			//                 return testFactory.get({ id: $stateParams.uuid }).$promise;
			//             } else {
			//                 return {};
			//             }
			//         }]
			//     },
			//     ncyBreadcrumb: {
			//         label: "{{breadcrumb}}"
			//     },
			//     views: {
			//         "": {
			//             templateUrl: "/app/core/resource/views/resource.html",
			//             controller: "testDetailController"
			//         },
			//         "form@pelorus.test.edit": {
			//             templateUrl: moduleFolder + "views/detail.html"
			//         }
			//     }
			// });
		}

	]);
