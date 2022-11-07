// The split method converts a string into an array, while the join method does the 
// opposite.
// a. Try it! Given the string str = 'In space, no one can hear you code.', see what 
// happens when you 
// print str.split() vs. str.split('e') vs. str.split(' ') vs. str.split(''). What 
// is the purpose of the parameter inside the ()?
// b. Given the array arr = ['B', 'n', 'n', 5], see what happens when you 
// print arr.join() vs. arr.join('a') vs. arr.join(' ') vs. arr.join(''). What is 
// the purpose of the parameter inside the ()?
// c. Do split or join change the original string/array?
// d. The benefit, cadet, is that we can take a string with delimiters (like commas) 
// and convert it into a modifiable array. Alphabetize these hold contents: 
// "water,space suits,food,plasma sword,batteries", and then combine them into 
// a new string


var str = 'In space, no one can hear you code.';

//first operation
console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));

//second operation
var  arr = ['B', 'n', 'n', 5];
console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(' '));
console.log(arr.join(''));


//third operation
// ANS : no it dosent modify the original array

//fourth oeration
