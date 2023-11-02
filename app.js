const express = require('express');
const fs = require('fs');
const path = require('path');
const pug = require('pug');
const app = express();

const port = 80;

// For serving static files:-
app.use('/static', express.static('static'));
// '/static' is the url 
// When we serve the static file, we can't really executre the file on the server, the raw file will be visible on my server(not it's by product)

// Set the template engine as pug
app.set('view engine', 'pug');

// Set the View directory 
app.set('views',path.join(__dirname, 'views'));

// Our Pug demo endpoint 
app.get("/demo", (req, res)=>{
    res.render('demo', { title: 'Hey harry', message: 'Hello there and Thanks fro telling me how to use pubG!' })
    // Here 'demo' is the name of the pug file in the views directory
    // From pug express Website(guide option from the navigation bar)
    // We can also render HTML files too... 
});
 
app.get("/", (req, res) => {
    res.send("Hom epage Via get Request");
});

app.get("/about", (req,res) => {
    res.send("About Page via Post request");
});

app.get("/services", (req, res) => {
    res.send("services page via get request");
});

// To get the post request using express at the endpoint '/services'
app.post("/services", (req, res) => {
    // res.send("This is A post request");
    // Only one of these send responses work.  The on eat the top gets sent as a response to the api request at a specific endpoint
    res.send("services page via post requrest");
});


app.get("/membership", (req, res) => {
    res.send("Member ship page via Get Request");
});

app.get("/contact", (req, res) => {
    res.send("The contact Page via the get request");
    // If we make a get api request on the port 80 with the endpoint '/contact', you will get that file as the response in the postman..
});

app.listen(port, () => {
    console.log(`The Application successfully On the post ${port}`);
    console.log(`We also used the nodemon to contantly udate the server to constantly cope wioth the changes made in the original file`);
});

// In case if the oub template does notload, just delete the node-modules folder and reinstall everything :)