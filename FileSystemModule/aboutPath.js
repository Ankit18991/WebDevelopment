import path from "path"

let myPath = "D:\\webdevelopment\\Javascript\\commonJSAndEcmaScriptModules\\FileSystemModule\\utkarsh.txt"

console.log(path.extname(myPath)) // Name of the extension of the file being referred through 'myPath'
console.log(path.dirname(myPath)) // Directory Name
console.log(path.basename(myPath)) // base name of the file which is being referred through 'myPath'

console.log(path.join("c:/", "programs\\utkarsh.txt")) // Now we can use the created path. Sometimes we do need to join the paths when working on projects and writing the custom logic for the joining of the path may take a troll over the programmer