is-prop
=======

Functional way to check if a property in an object equals something.

Basically `return object[property] == value`, but with functions.

`npm install --save is-prop`

Example
-------

`is-prop` is useful when you want to test for equality in an object that's being passed to a function. It could for instance be used for filtering:

```javascript
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

console.log(patricians);
/*
[
	{ name: 'Jane', type: 'patrician' },
	{ name: 'Mauve', type: 'patrician' }
]
*/

```

API
---

### `isProp(property,value,[strict])`

Takes in the name of the property to test, and what you expect it to be equal to.

#### arguments

-	property `String`: The property you want to look at within the object
-	value `Any`: The value you expect the property to equal to
-	[strict] `Boolean`: Whether to use `===`, by default it's false (`==`).

#### returns

-	`Function(object)`: Returns a function which takes the object to test
