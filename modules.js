const xyz = require("fs");     
// It is a module
// To get the list of node JS modules, we can go to google, we don't have to learn every single module...
// Modules: 1. Built in modules     2. Custom Modules    3. THIRD party modules

let text = xyz.readFileSync("D:/web development/Javascript/Node.js/dele.txt","utf-8");
// If we want to update(replace) the content of the file
text = text.replace("content", "in browser Javascript for")
text = text.replace("la bla la"," Mr. Utkarsh");
let first_occurence = text.indexOf("for");
text= text.replace(text[first_occurence], "");

text= text.replace(" or", "");

console.log("The content of the file is ");
console.log(text + "\n"); 

// Writing in the file
xyz.writeFileSync("D:/web development/Javascript/Node.js/Rohan.txt", text);
// If the file does not exist , this will create the file at first and then write the value stored in 'text' variable in Rohan.txt file 
console.log(".........Creating a New file.........");
console.log("The content in the newly created file is :-");
let new_Read = xyz.readFileSync("D:/web development/Javascript/Node.js/Rohan.txt", "utf-8");
console.log(new_Read);

// Updating the newly created file :-
new_Read = new_Read.replace("Utkarsh","Ujjwal");
console.log("The updated file content of the new file = \n" + new_Read);