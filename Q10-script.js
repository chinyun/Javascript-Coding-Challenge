/* #1
Filter unique array members.
Create a function unique(arr) that should return an array with unique items of arr.
*/
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// # solution 1-1
function unique( arr ) {
	let result =[ ];
	for( let str of arr ){
		if ( !result.includes( str ) ) result.push( str );
	}
	return result;
}

alert( unique( values ) ); // Hare, Krishna, :-O


// # solution 1-2: using 'set'
function unique( arr ) {
	let set = Array.from( new Set( arr ) ) ;
	return set;
} 

alert(  unique( values ) ); // Hare, Krishna, :-O


/* #2
Filter Anagrams. Anagrams are words have the same number of same letters, but in different order.
array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]
Create a function that clean(array) should returns "nap,teachers,ear" or "PAN,cheaters,era".
*/

let array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function clean ( arr ) {
	let map = new Map( );
	for ( let items of arr ){ 	
		let sortedValue = items.toLowerCase().split('').sort().join();
		// ["a,n,p", "a,c,e,e,h,r,s,t", "a,c,e,e,h,r,s,t", "a,n,p", "a,e,r", "a,e,r", "a,c,e,e,h,r,s,t"]
		map.set( sortedValue, items );
	}
	return Array.from( map.values( ));
} 

alert( clean( array ) ); // "PAN,hectares,era"

