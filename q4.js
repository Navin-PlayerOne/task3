// Some methods---like splice and push---alter the original array, while others do 
// not. Use the arrays
// holdCabinet1 ['duct tape', 'gum', 3.14, false, 6.022e23]
// and
// holdCabinet2 ['orange drink', 'nerf toys', 'camera', 42, 'parsnip']
// to explore the following methods: concat, slice, reverse, sort. Refer back to the 
// chapter if you need to review the proper syntax for any of these methods.
// a. Print the result of using concat on the two arrays. Does concat alter the 
// original arrays? Verify this by printing holdCabinet1 after using the method.
// b. Print a slice of two elements from each array. Does slice alter the original 
// arrays?
// c. reverse the first array, and sort the second. What is the difference between 
// these two methods? Do the methods alter the original arrays?


let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23]
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip']


//first operation
console.log(holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1); //dosent modify holdCabinet1


//second operation
console.log(holdCabinet1.slice(0,2));
console.log(holdCabinet1);                  //dosent modify original array
console.log(holdCabinet2.slice(0,2));
console.log(holdCabinet2);


//third operation
console.log(holdCabinet1.reverse());
console.log(holdCabinet2.sort());