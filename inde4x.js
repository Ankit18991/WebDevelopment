console.log("I am Here in my index File of Javascript");
const mod = require("./mod");
// Whats actually happened here:-
// summ : sum,
// name: "Utkarsh",
// Designaton: " Programmer"


console.log(mod);
// console.log("\n" + mod([3,4]));
//      --->   Calling the function that is basically imported into the variable mod)
//      --->   A signle dot represents that the given file is in the same folder as this file

// Using module.exports objects which is imported here in the mod variable
console.log(mod.summ(34,54));

// Just for knowledge purpose:-
console.log(mod.name);