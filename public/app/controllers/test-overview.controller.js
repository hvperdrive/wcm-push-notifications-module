"use strict";

angular.module("wcm-test_0.1.0.controllers")
	.controller("testOverviewController", [

		"$scope",
		"$controller",
		"appModules",
		"configuration",
		"constants",

		// services
		"SessionService",
		"LabelService",

		// Resolves
		"ListData",

		function ($scope, $controller, appModules, configuration, constants, SessionService, LabelService, ListData) {

			$scope.data = ListData.data;

			$scope.tableConfig = {
				pagination: constants.pagination,
				searchField: {
					enabled: true,
					placeholder: LabelService.getString("Search"),
					style: {
						override: true,
						className: "c-input-text c-input-text--sm u-width-4-6 fr"
					}
				},
				columns: [{
					columnName: LabelService.getString("Name"),
					key: "name",
					sortable: true
				}, {
					columnName: LabelService.getString("Actions"),
					template: '<a ui-sref="^.edit({uuid:i.uuid})">' + LabelService.getString("Edit") + "</a>"
				}]
			};
		}
	]);
