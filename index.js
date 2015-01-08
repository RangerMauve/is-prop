var prop = require("prop");
module.exports = function isProp(property,value){
	return function(object){
		return prop(property)(object) == value;
	}
}
