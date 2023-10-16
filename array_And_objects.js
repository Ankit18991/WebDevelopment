// Two types of Data types in Javascript
// Primitive Datatypes:-
let myvar = 69;
let myvar2 = true;
let myvar3 = undefined;
let myvar4 = null;

// Object data types
let employee = {
    name: "Utkarsh",
    age: 20,
    profession: "Software Developer",
    married: false,
}

    console.log(employee);

let student = {
    name:"Utkarsh",
    course: "BCA",
    rollno : 225087,
    studentId : 3907987,
    'lover name': undefined,
};

    console.log(student);
//  Two ways to access the memebers of the objects and arrays:-
console.log(student.rollno);
console.log(employee['profession']);
console.log(`The student's Lover name is ` + student['lover name']);

// Array is a kind of object
// Two ways to Initialise an array:-
// Path 1:-
let student_Details = new Array("Utkarsh Kumar",225087,"Student",undefined,true);
console.log(student_Details);
console.log(student_Details[2]);

// Path 2:-
let students_Details = [`Suraj Kumar`,225068, "Student",48, 877,1];
console.log(students_Details);

// Some array Fucntions:-
console.log(`The Length of the Last array = ` + students_Details.length);   // 1
students_Details = students_Details.sort();
console.log(`The sorted Array  :- ` + "\n" + students_Details);
students_Details.push(`His real name is Not Suraj\nThe student is not suitable form this college`);
console.log(students_Details);
students_Details.pop();
console.log(students_Details);
students_Details.pop();
console.log(students_Details);