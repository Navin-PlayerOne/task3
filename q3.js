// The splice method can be used to either add or remove items from an array. It can 
// also accomplish both tasks at the same time. Use splice to make the following 
// changes to the final cargoHold array from exercise 2. Be sure to print the array after 
// each step to confirm your updates.
// a. Insert the string 'keys' at index 3 without replacing any other entries.
// b. Remove 'instruction manual' from the array. (Hint: indexOf is helpful to avoid 
// manually counting an index).
// c. Replace the elements at indexes 2 - 4 with the items 'cat', 'fob', 
// and 'string cheese'.

let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual',
'meal packs', 'slinky', 'security blanket'];

//first operation
cargoHold.splice(3,0,"keys");
console.log(cargoHold);

//second operation
cargoHold.splice(cargoHold.indexOf('instruction manual'),1);
console.log(cargoHold);

//third operation
cargoHold.splice(2,3,'cat','fob','string cheese');
console.log(cargoHold);