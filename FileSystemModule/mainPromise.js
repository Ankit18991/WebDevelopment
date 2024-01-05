import fs from "fs/promises"

let a = await fs.readFile("utkarsh.txt") //ES-6
// Since 'fs' is a module , so we can directly use await keyword to wait for a function to be executed or a promise to be resolved. We don't need to have a async function to use 'await' keyword in this case.

let b = await fs.appendFile("utkarsh.txt", "\nThe next Kdrama to watch is Snowdrop and Business Proposal. \n\nRight now I am Watching Goblin")

console.log(a.toString(), b);