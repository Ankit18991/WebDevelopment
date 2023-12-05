console.log("Hello World")
/* To get the number of child nodes in our body tag, we use 'document.body.childNodes' --> This Returns an array
  To get the child the specific child node, we use: document.body.childNodes[0]
  To get the child nodes within the child nodes, we use: document.body.childNodes[1].childNodes
  */

  let cont = document.body.childNodes[1]
//   undefined
  console.log(cont);
// -->  <div class=​"contaioner">​…​</div>​
  console.log(cont.firstChild);
// -->  #text
  console.log(cont.lastChild);
// -->  #text
  console.log(cont.firstElementChild);
// -->To the first element Node inside the childNode[1] of our body tag, i.e., our container in this case
// -->  <div class=​"box">​Box1​</div>​

// Adding CSS to the selected childNodes
console.log(cont.lastElementChild)
/* <div class=​"box">​Box5​</div>​ */
cont.lastElementChild.style.color = 'red';
// 'red'
cont.lastElementChild.style.backgroundColor = 'green';
// 'green'

// --> To get the parent element of any child node: 
console.log(cont.lastElementChild.parentElement);

// --> To get only Element childs of our container in our HTML file
console.log(document.body.firstElementChild.children);

// -->To access each child element of our container in the HTML file
console.log(document.body.firstElementChild.children[0])
console.log(document.body.firstElementChild.children[1])
console.log(document.body.firstElementChild.children[2])
console.log(document.body.firstElementChild.children[3])

// To the next elelement in the same container, that's why sibling
console.log(document.body.firstElementChild.children[3].nextElementSibling)
console.log(document.body.firstElementChild.children[3].previousElementSibling)
console.log(document.body.firstElementChild.children[3].previousSibling)

// Playing with Tables:-
console.log(document.body.children);
console.log(document.body.children[1]);
console.log(document.body.children[1].rows);  // TO get all the rown in the table
console.log(document.body.children[1].caption);
console.log(document.body.children[1].thead);
console.log(document.body.children[1].tBodies);  // To get the elements in the body
