// What is express?
// Express is a web-application framework for node.js. Express can do url parsing automatically  , and we created custom backend using if-else statement. express does it , does the url parsing for you. It also handles routing.
//  It is uch easier to create a Custom Backend in express than it is without it..

const express = require('express');
// We Imported the module of express

const app = express();
const port = 80;
// We made an app of Express(These two steps are must do if we are making the express app)

// Sometimes we might wanna send() json or Status code........
app.get("/", (req, res)=>{
    // .get for GET requests 
    // If Someone goes into '/' of this app, a function will get executed
    res.status(200).send("This is the Home Page of my first app using expreess by me ,Utkarsh");
});

app.get("/about", (req, res)=>{
    // If Someone goes into '/' of this app, a function will get executed
    res.send("This is About page Of my first app using expreess by me ,Utkarsh");
    // app.get hits the get request at any end point .... 
    // Here we handled the get request at the '/about' endpoint
});

app.get("/this", (req, res)=>{
    // If Someone goes into '/' of this app, a function will get executed
    res.status(404).send("This Page Is Not Found .. \n" + "ERROR 404 !!! \n");
    // app.get hits the get request at any end point .... 
    // Here we handled the get request at the '/this' endpoint
});

app.post("/about", (req, res)=>{
    // .post for the post request..
    // If Someone goes into '/' of this app, a function will get executed
    res.send("This is POST request About page Of my first app using expreess by me ,Utkarsh");
    // app.post hits the post request at any end point .... 
    // Here we handled the post request at the '/about' endpoint
});

app.listen(port, () => {
    console.log(`The application Started Success Fully on port ${port}`);
    // Here we handled t he post request at the '/about' endpoint
});

// We are gonna test this app using postman application
// NOTE: To run the file ,w e used the syntxz(after going to the parent folder of that file):-
        // node <file_name>