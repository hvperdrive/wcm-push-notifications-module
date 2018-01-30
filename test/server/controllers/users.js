var expect = require("chai").expect;
var getResponseMock = require("../../mocks/response");

var usersController = require("../../../app/controllers/users");

describe("Users", function() {
	describe("get", function() {
		it("Should return users", function() {
			var res = getResponseMock();

			usersController.get({}, res);

			expect(res.spies.status.calledOnce).to.be.true;
			expect(res.spies.status.firstCall.args).to.eql([200]);
			expect(res.spies.json.calledOnce).to.be.true;
			expect(res.spies.json.firstCall.args).to.eql([{
				data: [
					{
						name: "Jeroen Valcke"
					},
					{
						name: "Jim Smith"
					}
				]
			}]);
		});
	});
});
