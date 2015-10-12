var digo = require("digo");

exports.default = function () {
	digo.src("fixtures/*.css").pipe("../").dest("_build");
};
