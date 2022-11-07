// push, pop, shift and unshift are used to add/remove elements from the beginning/end of 
// an array. Bracket notation can be used to modify any element within an array. Starting 
// with 
// the cargoHold array ['oxygen tanks', 'space suits', 'parrot', 'instruction manua
// l', 'meal packs', 'slinky', 'security blanket'], write statements to do the 
// following:
// a. Use bracket notation to replace 'slinky' in the array with 'space tether'. Print 
// the array to confirm the change.
// b. Remove the last item from the array with pop. Print the element removed and 
// the updated array.
// c. Remove the first item from the array with shift. Print the element removed 
// and the updated array.
// d. Unlike pop and shift, push and unshift require arguments inside the (). Add 
// the items 1138 and '20 meters' to the array - the number at the start and the 
// string at the end. Print the updated array to confirm the changes.
// e. Use a template literal to print the final array and its length.

let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual',
'meal packs', 'slinky', 'security blanket'];

//first operation
cargoHold[5] = 'space tether';
console.log(cargoHold)

//second operation
cargoHold.pop()
console.log(cargoHold)

//third operation
cargoHold.shift();
console.log(cargoHold);

//fourth operation
cargoHold.unshift(1138);
cargoHold.push("20 meters");
console.log(cargoHold);

//fifth operation
console.log(`this the array {${cargoHold}} with length ${cargoHold.length}`);
