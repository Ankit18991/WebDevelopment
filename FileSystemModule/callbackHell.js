// The 'fs' module can cause the call back hell . Suppose we are working on the many files,and we want to read some files only come particular file is written, so asynchronous readFile() and writeFile() methods will cause the call backhell. An example is below :-

const fs = require("fs");
// console.log(fs);

console.log("starting....")
// fs.writeFileSync("utkarsh.txt", "Utkarsh is a good boy")

// --> Asynchronous writeFile() [Recommended to be Used]
fs.writeFile("utkarsh.txt", "Utkarsh is a student right now", () => {
    console.log("Done....");
    fs.readFile("utkarsh.txt", (error, data) => { // Asynchronous reading of the file.It is execute once after once the file is created and written over .(Here in this case)
        console.log(error, data.toString());
        // Again doing the same job after the 'utkarsh.txt' file is read 
        fs.writeFile("utkarsh.txt", "Utkarsh is a student right now", () => {
            console.log("Done....");
            fs.readFile("utkarsh.txt", (error, data) => { // Asynchronous reading of the file.It is execute once after once the file is created and written over .(Here in this case)
                console.log(error, data.toString());
                // Again doing the same job after the 'utkarsh.txt' file is read 
                fs.writeFile("utkarsh.txt", "Utkarsh is a student right now", () => {
                    console.log("Done....");
                    fs.readFile("utkarsh.txt", (error, data) => { // Asynchronous reading of the file.It is execute once after once the file is created and written over .(Here in this case)
                        console.log(error, data.toString());
                        // Again doing the same job after the 'utkarsh.txt' file is read 
                        fs.writeFile("utkarsh.txt", "Utkarsh is a student right now", () => {
                            console.log("Done....");
                            fs.readFile("utkarsh.txt", (error, data) => { // Asynchronous reading of the file.It is execute once after once the file is created and written over .(Here in this case)
                                console.log(error, data.toString());
                                // Again doing the same job after the 'utkarsh.txt' file is read 
                                
                            })
                        })
                    })
                })
            })
        })
    })
})
// The call back function gets called once the file is created and written over
console.log("Ending....")