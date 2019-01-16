/* Question 6: Write the function sumInput() that:
Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/

function sumInput() {
	let storeArr = [];
	while ( true ) {
		let newValue = prompt('store a number in array?','');
		
		// Check if user enter cancel, '' or non-numeric value?
		if( newValue === null || newValue === '' || !isFinite(newValue)) break;
		
		// Here we turn newValue to number instead of adding + to prompt, so that we can check if user enter non-numeric value. 
		storeArr.push( +newValue );
	}
	alert( `You entered ${ storeArr }` );
	
	let sum = 0;
	for ( let value of storeArr ){
		sum += value;
	}
	return sum;
}

alert( `The sum of above numbers is ${sumInput()} ` ) ;
