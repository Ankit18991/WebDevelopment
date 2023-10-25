// A Very very Imp topic : Generating random Numbers
let ranDom = Math.random();
console.log(ranDom);

// THE RANDOM MATH FUNCTION GOVES RANDOM VALUE AND THOSE RANDOM VALUES ARE IN BETWEEN 0 AND 1
// Let's Suppose we want random nuber between 1 and 100
let limit_min = 1;
let limit_max = 100;

let random_bw_1_100 = limit_min + (limit_max - limit_min) * Math.random();
// So that if we get Math.random()=0(since random() ALWAYS RETURNS THE VALUE BETWEEN 0 TO 1) or (limit_max - limit_min) = 0, we will at least get a minimum of limit_min i.e., 1(in this case) :)

//  And If Math.random() return 1, in that case ,  we will get limit_max :)
console.log(" The random number between 1 and 100 = " + random_bw_1_100);

// Generating the random number between 60 and 70
let min_limit = 60;
let max_limit = 70;

let rnd_btw_60_70 = min_limit + (max_limit - min_limit) * Math.random();
console.log("The random number between 60 and 70 = " + rnd_btw_60_70);
