console.log("This is Tutorial");
function greet(name){
    console.log(name + `is a good Boy`);
}

let name = "Utkarsh";
let name1 = "Shubham";
let name2 = "Rohan";
let name3 = "Sagar";
greet(name);
greet(name1);
greet(name2);
greet(name3);

// To find the factorual of a Number
function factorial(n){
    if (n == 1 || n == 0)
    {
        return 1;
    }

    else{
        let res = 1;
        for(let i = n; i > 0 ; i--)
        {
            res=res*i;
        }

        return res;
    }
}

console.log(`\n The factorial of the number = ` + factorial(6));

// Function to find average of three Numbers:-
function average(num1 , num2, num3)
{
    return ((num1 + num2 + num3) / 3);
}

let returnVal = average(3,4,6);
console.log(returnVal);

// Function to Product three Numbers:-
function product(a,b,c){
    return (a*b*c);
}

let productVal = product(2,2,3);
console.log(productVal);

// Function to check if the numbe ris priume or not:-
function prime_Check(num1)
{
    let count = 0;
    for (let i = 2 ; i <= num1 ; i++)
    {
        if((num1 % i) == 0)
        {
            count++;
        }
    }

    if(count == 1)
    {
        console.log(`The number is Prime`);
    }

    else{
        console.log(`The number is not a Prime Number`);
    }
}

prime_Check(12);
prime_Check(13);
prime_Check(15);

// Fibonacci Series Using Fuctions In Javascript:-
// 0    1   1   2   3   5   8   13  21  34  .   .   .   .
function fibonacci_Series(n)
{
    console.log(0 + `\t`);
    console.log(1 + `\t`);
    
    let first = 0;
    let second = 1;
    let third;
    
    for (let i = 0 ; i < n ; i++)
    {
        third = (first + second);
        console.log(third + `\t`);
        first = second;
        second = third;
    }
}

fibonacci_Series(7);