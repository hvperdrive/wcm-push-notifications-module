module.exports.get = function (req, res) {
	res.status(200).json({
		data: [
			{
				name: "Jeroen Valcke"
			},
			{
				name: "Jim Smith"
			}
		]
	});
}
