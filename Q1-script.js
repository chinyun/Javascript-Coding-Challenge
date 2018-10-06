// Question 1: Clean the room function: 
// given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: 
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 

const arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
ArrayFromAbove();

function ArrayFromAbove(){
	arr.sort(function(a,b){
		return a-b;
	});
	
	// Now arr =[1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591];

	let counter = 0;
	let Newarr = [];
	
	arr.forEach(function(num,i){
		
		if (arr[i] === arr[i+1]){
			counter++;
		
		//Counting in order to know there are how many the same items for each number.
		// For example: if arr[0] === arr[1], then counter +1
			
		} else if (arr[i] !== arr[i+1] && arr[i] === arr[i-1]){
		
		// If the item not equals to the next item and equals to the previous item,
		// it should stop counting the similar ones, start storing the items to the new array. 
			
			let Subarr = [];			
			Subarr = arr.slice(i-counter, i+1);
			
			// Let a Subarr to store the sub array that sliced by arr. 
			
			Newarr.push(subarr);
			
			// Push Subarr to Newarr.
			
			counter = 0;
			
		} else {
			Newarr.push(num);
		}
	});

	Newarr.sort(function(a,b){
    		return a-b;
	});

	console.log(Newarr);
};
