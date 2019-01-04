// Question 6: Create a constructor function Accumulator(startingValue). 
// Object that it creates should: 
// 1.Store the “current value” in the property value. 
// 2.The starting value is set to the argument of the constructor startingValue. 
// The read() method should use prompt to read a new number and add it to value. 
// In other words, the value property is the sum of all user-entered values with the initial value startingValue.

function Accumulator (startingValue) {
	
	// use "this.value" to store initial value 
	this.value = startingValue;
	
	// "this.value" would be changed by calling of method "read"
	this.read = function () {
		this.value += +prompt('add a number', '') 
	};
}

let acc = new Accumulator( 0 );
acc.read();
acc.read();
alert(acc.value);