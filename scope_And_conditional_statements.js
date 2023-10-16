var str1 = "This is me, Utkarsh";
console.log(str1);

str1 = "I am A student";
console.log(str1);

let str2 = "This is A course on Javascript";
console.log(str2);

str2 = "This is Within the web development Course";
console.log(str2);
{
    var str1 = "I am from L. N . Mishra college of Business Management";
}

console.log(str1);
// The value of the variable declared using the 'var' keyword has a global scope, it can be changed anywhere...
// Although if the variable is declared with 'let' keyword,in lets say line 1, And when we redclare it within another scope using let key word(done below), the new value of the variable will be valid in that scope only, once we get out of that scope , the value of the same variable becomes the earlier value, set in line 1(or anyhwere in that scope(the outside scope))

// let str2 = "k"; We can create same var again using let keyword in the same scope

console.log(str2);
{
    let str2 = "This is the second string within the scope(Declared using let Keyword)";
    console.log(str2);
}

console.log(str2);

const constant_String = `I am Constant and i cannot be Changed`;
console.log(constant_String);

// Conditional Statements :-
// 1. THe if else Statement
let age = 16;
if (age > 18)
{
    console.log(`Allowed to get A driver's license`);
}

else if (age == 16)
{
    console.log(`Eligibke to be persecuted in the case or court`);
}

else{
    console.log(`Just a Kid`);
}

// 2. The switch case:-
const str3 = `Utkarh`;

switch(str3){
    case `Utkarsh`:
        console.log(`The name is ${str3}`);
        break;

    case `Employee`:
        console.log(`This is Random employee word`);
        break;

    default:
        console.log(`None of the stamenet and cases are true`);
        break;
}
