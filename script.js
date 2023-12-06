console.log("Harry");

/*                          ===================================================================
                                                        SEARCHING THE DOM
                            ====================================================================
*/

/*  1. Class Selector or searcher of HTML document
let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor = "cyan"
*/

/* 2. ID selector of our HTML element
document.getElementById("red").style.backgroundColor = "lightgreen";
*/

// 3. Query Selector
console.log(document.querySelector(".box"));  // Selects the first box with the class = "box"
document.querySelector(".box").style.backgroundColor = "green";  // Adding Inline CSS using Javascript

// document.querySelectorAll(".box");  --> Selects all the elements with the class = "box"
console.log(document.querySelectorAll(".box")) 
// --> IT returns an HTML collection with the class "box"

let node_List = document.querySelectorAll(".box");
node_List.forEach(e => {
    e.style.backgroundColor="lightgreen"
});

document.querySelectorAll(".box")[0].style.backgroundColor = "orange"  // --> This also Works

// 4. Tag Selector : -
console.log(document.getElementsByTagName("div"));
// Return the HTML collection(in the form of array) of all the elements , with tag = div


  /*                      ===================================================================
                                        SOME METHODS FOR DOM SEARCHING
                          ====================================================================
*/

// Matches Method
let e= document.getElementsByTagName("div");
let true_false = e[4].matches("#red");
console.log(true_false);

let true_false1 = e[2].matches("#red");
console.log(true_false1);

// closest Method
let closest = e[2].closest("#red");  // Returns the nearest element with the given css
console.log(closest);
// Returns closest = NULL because neither this nor does its parent element matches the given CSS

element = e[2].closest(".container")
console.log(element);

// CONTAIN element :-
let contains = document.querySelector(".container").contains(e[2]);
// --> Check if the given css selector containers the other one
console.log(contains);
// Returns true

let contains1 = document.querySelector(".container").contains(e[0]);
console.log(contains1);
// Return true, i.e., the element contains itself

let contains2 = document.querySelector(".container").contains(document.querySelector("body"));
console.log(contains2);
// Returns false because .container does not contain the body of the HTML document

let contains3 = document.querySelector("body").contains(document.querySelector(".container"));
console.log(contains3);

