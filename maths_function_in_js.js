// printing the math object :-
let var1 = Math;
console.log(var1);

// Printing Constants in the maths Function
console.log(' The value of PI = ' + Math.PI);
console.log('The value of e = ' + Math.E);
console.log(' The Value of LN2 = ' + Math.LN2);
console.log("The value of Square root of 4 = " + Math.sqrt(4));
console.log("The value of Square root of SQRT1_2 = " + Math.SQRT1_2);
console.log("The value of log2e = " + Math.LOG2E);

// Math Functions of the maths Object
console.log("The value of 3^6 = " + Math.pow(3,6));
console.log("The value of cube root of 27 = " + Math.cbrt(27));
console.log("The value of ceiling of 5.46788098 i.e, This number rounded up(not down) to the nearest interger" + Math.ceil(5.46788098));
console.log("The value of the floor of 5.4678978 = " + Math.floor(5.46789797));


let a = 7.89;
let b = 7.49;
console.log("The rounded off value of a and b respectively = " + Math.round(a) + " , " + Math.round(b));

// abs function
console.log("The absolute Value of 6.69 = " + Math.abs(6.69));
console.log("The absolute Value of -6.69 = " + Math.abs(-6.69));

// Trigonometric Functions
// We pass Value in radians in the trigonometric functions
console.log("The value of sin 90 degrees = " + Math.sin((Math.PI/2)));
console.log("The value of cos 36 degrees = " + Math.cos((Math.PI/5)));
console.log("The value of tan 45 degrees = " + Math.tan((Math.PI/4)));

// Minimum and maximum functions
console.log("The minimum Value amoung 5, 7, 8 ,01 = " + Math.min(1, 4,3,89));
console.log("The maximum Value amoung 5, 7, 8 ,01 = " + Math.max(1, 4,3,89));