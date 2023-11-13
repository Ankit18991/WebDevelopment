// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    mongoose.connect('mongodb://localhost/harryKart');
    // We are on the localhost url port, and we got into the harryKart DB created at the default port of mongoDB..
    // mongoose.connect('mongodb://127.0.0.1:27017/test');      ---> This also Works
  console.log("We are connected now.....");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}