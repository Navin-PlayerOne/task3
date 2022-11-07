// Arrays can hold different data types, even other arrays! A multi-dimensional 
// array is one with entries that are themselves arrays.
// a. Define and initialize the following arrays, which hold the name, chemical 
// symbol and mass for different elements:
// i. element1 = ['hydrogen', 'H', 1.008]
// ii. element2 = ['helium', 'He', 4.003]
// iii. element26 = ['iron', 'Fe', 55.85]
// b. Define the array table, and use push(arrayName) to add each of the element 
// arrays to it. Print table to see its structure.
// c. Use bracket notation to examine the difference between 
// printing table[1] and table[1][1]. Don't just nod your head! I want to HEAR 
// you describe this difference. Go ahead, talk to your screen.
// d. Using bracket notation and the table array, print the mass of element1, the 
// name for element 2 and the symbol for element26.

//first operation
let element1=['hydrogen','H',1.008];
let element2=['helium','He',4.003];
let element26=['iron','Fe',55.85];
var table=[];
table.push(element1,element2,element26);
console.log(table);


//second operation
console.log(table[1]);
console.log(table[1][1]);


//third operation
console.log(table[0][2]);
console.log(table[1][0]);
console.log(table[2][1]);
