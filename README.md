Question 1:
Clean the room function: 
given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. 
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

Question 2: 
Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

Question 4: Create an object ( calculator ) with three methods:
1. read() prompts for two values and saves them as object properties.
2. sum() returns the sum of saved values.
3. mul() multiplies saved values and returns the result.

Question 5: Create a constructor function Accumulator(startingValue). 
Object that it creates should: 
1. Store the “current value” in the property value. 
2. The starting value is set to the argument of the constructor startingValue. 
The read() method should use prompt to read a new number and add it to value. 
In other words, the value property is the sum of all user-entered values with the initial value startingValue.

Question 6: Write a function that: Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero.

Qusetion 7: Write a function that changes dash-separated words like “hello-myfriends” into camel-cased “helloMyfriends”. 

Bonus: the function removes all dashes if there are more than one, each word after dash becomes uppercased.

Qusetion 8: Collect 5 questions about how to arrange data of arrays.
1. Write a function filterRangeInPlace(arr, a, b) that gets an array arr 
and removes from it all values except those that are between a and b.
The function should only modify the array. It should not return anything.
2. Copy and sort array. We have an array of strings array. 
Create a function copySorted(arr) that returns a sorted copy of it, 
but keep original array unmodified.
3. You have an array of user objects, each one has user.name. 
Write the code that converts it into an array of names.
4. Write the function getAverageAge(users) that gets an array of objects
with property age and gets the average.
5. Map to object. You have an array of user objects, each one has name, surname and id.
Write the code to create another array from it, of objects with id and fullName, 
where fullName is generated from name and surname.

Qusetioin 9: Include 2 questions about how to filter unique items of an array.
1. Filter unique array members.
Create a function unique(arr) that should return an array with unique items of arr.
2. Filter Anagrams. Anagrams are words have the same number of same letters, but in different order.
array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]
Create a function that clean(array) should returns "nap,teachers,ear" or "PAN,cheaters,era".
