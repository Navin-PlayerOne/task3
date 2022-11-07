// For each of the exercises below, assume you are starting with the following people 
// array.
// let people = ["Greg", "Mary", "Devon", "James"];
// 1.Using a loop, iterate through this array and console.log all of the people.
// 2.Write the command to remove "Greg" from the array.
// 3.Write the command to remove "James" from the array.
// 4.Write the command to add "Matt" to the front of the array.
// 5.Write the command to add your name to the end of the array.
// 6.Using a loop, iterate through this array and after console.log-ing "Mary", exit 
// from the loop.
// 7.Write the command to make a copy of the array using slice. The copy should 
// NOT include "Mary" or "Matt".
// 8.Write the command that gives the indexOf where "Mary" is located.
// 9.Write the command that gives the indexOf where "Foo" is located (this should 
// return -1).
// 10.Redefine the people variable with the value you started with. Using the splice 
// command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your 
// array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", 
// "James"].
// 11.Create a new variable called withBob and set it equal to the people array 
// concatenated with the string of "Bob".


let people=["Grey","Mary","Devon","James"];

//first operation
for(let i=0;i<people.length;i++)
{
    console.log(people[i]);
}


//second operation
people.shift();
console.log(people);


//third operation
people.pop();
console.log(people);


//fourth operation
people.unshift("Matt");
console.log(people);


//fifth operation
people.push("PlayerOne");
console.log(people);


//sixth operation
let i=0;
while(i!=people.indexOf("Mary")+1)
{
    console.log(people[i]);
    i++;
}


//seventh operation
let arr=[];
for(let i=0;i<people.length;i++)
{
    if(people[i]=="Mary"||people[i]=="Matt")
    {
        continue;
    }
    else
    {
        arr.push(people[i]);
    }
}
console.log(arr);


//eighth operation
console.log(people.indexOf("Mary"));


//nineth operation
console.log(people.indexOf("Foo"));


//tenth operation
people.splice(2,1,"Elizabeth","Artie");
console.log(people);


//elevnth operation (El)
let str1=people;
console.log(str1.concat("Bob"));