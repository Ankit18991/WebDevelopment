// const fs = require("fs");  --> We can use it without adding "type": "module" in the package.json file
import fs from "fs/promises"
console.log(fs);

console.log("starting....")
// fs.writeFileSync("utkarsh.txt", "Utkarsh is a good boy")

// --> Asynchronous writeFile() [Recommended to be Used]
fs.writeFile("utkarsh.txt", "Utkarsh is a student right now", () => {
    console.log("Done....");
    fs.readFile("utkarsh.txt", (error, data) => { // Asynchronous reading of the file.It is execute once after once the file is created and written over .(Here in this case)
        console.log(error, data.toString());

    })
})

fs.appendFile("utkarsh.txt", "\nCrash landing on You was one of the best Kdrama i had ever seen in my entire life", (error, data) => {
    console.log(data);
})
// The call back function gets called once the file is created and written over
console.log("Ending....")
