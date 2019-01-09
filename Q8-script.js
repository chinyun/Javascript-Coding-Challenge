// Write a function that changes dash-separated words like “hello-myfriends” into camel-cased “helloMyfriends”. 

function camelize ( str ) {
	str.toLowerCase();
	let turnArr = str.split(''),
		ind = turnArr.findIndex(item => item == '-'),
		UpperCaseLetter = str[ind+1].toUpperCase( ),
		newStr = str.slice(0, ind ) + UpperCaseLetter + str.slice(ind +2);
	return newStr;
}

alert( camelize( 'hello-myfriends' ) );  
// helloMyfriends


// Bonus: the function removes all dashes if there are more than one, each word after dash becomes uppercased.
// Examples:
// camelize('hello-my-friends') == 'helloMyFriends';

// P.S. Hint: use split to split the string into an array, transform it and join back.

function camelizes ( str ) {
	return str
		.toLowerCase()
		.split ( '-' )
		.map ( 
			( word, index ) =>  { 
				if ( index == 0 ) { return word }
					word = word[0].toUpperCase() + word.slice( 1 );
					return word;
			}
			// the same mean as '(word, index ) => index == 0 ? word : word[0].toUpperCase() + word.slice( 1 )'
		)
		.join( '' );
}

alert( camelizes( 'hello-my-friends' ) );
// helloMyFriends
