const express = require("express");
const path = require("path");
const pug = require('pug');
const app = express();
const mongoose = require('mongoose');
const port = 8000;

main().catch(err => console.log(err));

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded());
// In express, it is the middleware used to parse incoming request bodies with URL-encoded payloads.

async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/contactDance");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Define Mongoose Schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });

// Schema Being Compiled into model
const Contact = mongoose.model('Contact', contactSchema);
// Colection named Contact

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory

app.get("/", (req, res) => {
    res.status(200).render('home.pug');
});

app.post("/contact", (req, res) => {
    var myData = new Contact(req.body);
    // Creating a New Contact document from the req that is baing done by the user
    myData.save().then(()=>{
        res.send("This item has been saved to database");
    }).catch(() =>{
        res.status(400).send("Item was not Saved to the databse");
    })
    // It will also return a promise aside from saving it. .then() beacuse everything in node.js is asynchronous
    // res.status(200).render('contact.pug');  ---> we were rerendering it 
        
});

app.get("/contact", (req, res) => {
    res.status(200).render('contact.pug');
});

 
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

