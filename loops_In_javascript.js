let array1 = new Array("Utkarsh","Ankit","Suraj","Gaurav");
for (let i = 0 ; i < array1.length ; i++)
{
    console.log(`This is my friend `+ array1[i]);
}

// 1. ForEach Loops
array1.forEach(function f(element){
    console.log(`Hello Again my Friend ` + element);
});

array1.forEach(function arrays(friend){
    console.log(`Hello Again my Friend ` + friend + ` for the third Time in a row`);
});

// 2. for/of Loops IN Javascript:-
for (friends of array1){
    console.log(`I am Just Your Friend\n` + friends);
}

// 3. for/in loops to iterate through loop:-
let object1 = {
    name: "Utkarsh Kumar",
    rollno: 87,
    phone_no: "8798767787",
};

for (key in array1){
    console.log(`The ${key}th index element = ${array1[key]}`);
}

// While Loops In Javascript
let condition_Checker = 34;
do{
    console.log(`The condition is correct Because the 34 is greater than 18, that is why the while loop will be Excute`);
}while(condition_Checker >=18);

let array2 = new Array("Kriti","Kiara","Chipkali");
array2.forEach(function girls(g){
    console.log(g);
});