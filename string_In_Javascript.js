var name = "Utkarsh Kumar";
var age=21;
console.log(name);
console.log("My name's "+name+ "\nMy age  = "+age);

var user_name = "ankit_Utkarsh_07";
var message = " He's A good Boy";

// Using template literals
var temp = `My name is ${name}. My "Instagram User name" is ${user_name}\n
            and People's Meassage for me usually is " ${message} "`;

console.log(temp);

// Length Function of Javascript strings:-
var len = name.length;
console.log(`The lenght of the string "${name}" = ` + len);

// Adding Inner HTML:-
// document.getElementById('heading').innerHTML='<h1> This is an h1 heading inserted or added Using Javascript<h1>'