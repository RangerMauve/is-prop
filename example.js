var isProp = require("./");

var data = [{
	name: "Jane",
	type: "patrician"
}, {
	name: "Bob",
	type: "plebeian"
}, {
	name: "Mauve",
	type: "patrician"
}];

var patricians = data.filter(isProp("type", "patrician"));

console.log("Here are the patricians:", patricians);

/*
Here are the patricians:
[
{ name: 'Jane', type: 'patrician' },
{ name: 'Mauve', type: 'patrician' }
]
 */
