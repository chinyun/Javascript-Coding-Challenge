/* 
#1 Filter range "in place". 
Write a function filterRangeInPlace(arr, a, b) that gets an array arr 
and removes from it all values except those that are between a and b.
The function should only modify the array. It should not return anything.
*/

let array = [ 5, 3, 8, 1 ];
function filterRangeInPlace( arr, a, b ) { 
	for( let i = 0 ; i < arr.length ; i++ ) {
		if ( arr[i] < a || arr[i] > b ) { 
			arr.splice( i, 1 );
			i--;
		} 
	}
}
filterRangeInPlace( array, 1, 4 );
console.log( array ); // [ 1,3 ]

/*
#2 Copy and sort array. We have an array of strings array. 
Create a function copySorted(arr) that returns a sorted copy of it, 
but keep original array unmodified.
*/

let array = ["HTML", "JavaScript", "CSS"];
function copySorted( arr ) {
	let newarr = [],
		newArr = newarr.concat( arr );
	return newArr.sort( );
}
let sorted = copySorted(array);

alert( sorted );  // ["CSS", "HTML", "JavaScript"]
alert( array );  // ["HTML", "JavaScript", "CSS"]

/*
#3  You have an array of user objects, each one has user.name. 
Write the code that converts it into an array of names.
*/

let john = { name: "John", age: 26 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map( (item,index) => item = users[index].name );

alert( names ); // John, Pete, Mary

/*
#4  Write the function getAverageAge(users) that gets an array of objects
with property age and gets the average.
*/
let john = { name: "John", age: 26 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

function getAverageAge( arr ){
	return arr.reduce(( accumulator, item ) => accumulator + item.age , 0 )/ arr.length;
	/* the same meaning as:
	let sum = 0;
	for ( let i=0 ; i< arr.length ; i++ ) {
		sum += arr[i].age;
	}
	return sum / arr.length;
	*/
}
getAverageAge(users);

/*
#5 Map to object. You have an array of user objects, each one has name, surname and id.
Write the code to create another array from it, of objects with id and fullName, 
where fullName is generated from name and surname.
*/

let john = { username: "John", surname: "Smith", id: 1 };
let pete = { username: "Pete", surname: "Hunt", id: 2 };
let mary = { username: "Mary", surname: "Key", id: 3 };
let users = [ john, pete, mary ];

let usersMapped = users
	.map(( user ) => ({ 
		fullName: `${ user.username } ${ user.surname }`,
		id: user.id 
	}) ); 
console.log( usersMapped ); 
/*
 [{ fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }]
*/


/*
#6 Search an array and check if there were 'names' with letters user entered.  
Use a prompt to ask for letters. P.S. It should have an alert when there were no result.
*/

let users = [ 'Ginny', 'Wilson', 'Claire', 'Debbie', 'Lowrence', 'Jack' ];
function findUser ( arr ){
	let searchLetter = prompt( 'Enter letters to search?','' ).toLowerCase( );
	let result = arr
		.map( item => item = item.toLowerCase( ) )
		.filter( item => item.includes( searchLetter ) )
		.map( item => item = item[0].toUpperCase( ) + item.slice(1) );
	if ( result == '' ){ 
		alert (' Sorry, there were no result.');
	} else { 
		alert( result ); 
	}
}
findUser( users ) ;