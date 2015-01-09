var dotty = require("dotty");

module.exports = function isProp(property, value, strict) {
	if (strict === true) {
		return function(object) {
			return dotty.get(object, property) === value;
		}
	} else {
		return function(object) {
			return dotty.get(object, property) == value;
		}
	}
}
