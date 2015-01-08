var prop = require("prop");
module.exports = function isProp(property, value, strict){
	if (strict === true) {
		return function(object){
			return prop(property)(object) === value;
		}
	} else {
		return function(object){
			return prop(property)(object) == value;
		}
	}
}
