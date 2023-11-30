let numbers = [1, 2, 3, 4, "Utkarsh","Suraj"]
console.log(numbers.length)
console.log(numbers, typeof(numbers));
//  The type of the javascript arrya is object


// Array methods
let rollno = [56, 57, 58, 59 , 68,70,85,87,"Suraj"]

console.log(rollno.toString());
console.log(rollno, typeof(rollno))
//  --> The tostring() method does not impact the original array and its type

console.log(rollno.join(" and "))
//  It important while learning React

console.log(rollno.sort())
// This method affect the original array and sorts the array...
console.log(rollno)

rollno.push(4, "RohAN");
console.log(rollno);

// imilarly Pop

rollno.shift();     //-- > Removes the first element from the arrAY
console.log(rollno);

rollno.unshift();
// Add the element in the beginnning of the array

console.log(numbers.concat(rollno).sort())
console.log(numbers.concat(rollno.toString()).sort())
console.log(numbers)

// Loops with arrays. Using loops with arrays are evident :)
// 1. The traditional for loops:-
for (let iter = 0 ; iter < rollno.length; iter++){
    console.log(rollno[iter] + " \t ");
}

// 2. forEach Loop (mostly used with the arrays and objects)
rollno.forEach((element, index) => {
    console.log(element, index);
});

// 3. forIn Loops (also mostly used with the arrays)
for (const key in rollno) {
    if (Object.hasOwnProperty.call(rollno, key)) {
        const element = rollno[key];
        console.log(element);
    }
}

// 4. forOf loops
for (const iterator of rollno) {
    console.log(iterator)
}


// Map, filter and reduce :) :-
/* Say we wsnt to create another array with each element being the square of the elements in other array. One way to do it is creating a blank array and pushing the value of the square in the new array */

let newarray =[];
let num = [1, 2, 3, 4, 5, 6,7];
num.forEach(element => {
    newarray.push(element ** 2);
});

console.log(newarray);

/* Another way to do it is :- */
let newarray1 = num.map((e) => {
    return e**2;
});

console.log(newarray1);

// filter() :-
// We pass a function inside the filter() property...
let greater_than_7 = (e) => {
    if(e > 7){
        return true;
    }

    return false;
}

console.log(newarray1.filter(greater_than_7));

// The reduce
// We also pass a function in it
const red = (a,b)=>{
    return a+b;
}

console.log(newarray1.reduce(red));
