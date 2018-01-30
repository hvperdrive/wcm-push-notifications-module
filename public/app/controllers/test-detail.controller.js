"use strict";

angular.module("wcm-test_0.1.0.controllers")
	.controller("testDetailController", [
		"$scope",
		"$rootScope",
		"$controller",
		"$templateCache",
		"$filter",
		"$window",
		"uuid4",

		// Services
		"LabelService",
		"configuration",

		// Factories
		"testFactory",

		// Resolves
		"InstanceData",

		function ($scope, $rootScope, $controller, $templateCache, $filter, $window, uuid4, LabelService, configuration, testFactory, InstanceData) {

			// Referencing the required factory
			$scope._factory = testFactory;

			// Extend the default resource controller
			angular.extend(this, $controller("ResourceController", { $scope: $scope, InstanceData: InstanceData, Languages: [] }));

			// ResourceView configuration
			$scope.context.type = LabelService.getString("Test"); // Set the current type to "Member"

			$scope.enabledOptions = [
				{ key: "enabled", label: LabelService.getString("enabled") }
			];

			// $scope events
			$scope.$on("$destroy", function () {
				$scope._newInstance = undefined;
				$scope._instance = undefined;
			});
		}
	]);
