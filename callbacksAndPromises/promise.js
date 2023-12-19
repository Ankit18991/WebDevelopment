
/*                  =================================================================
                                                PROMISES
                    =================================================================                */


console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random Number was Supporting You 1")
    }

    else {
        setTimeout(() => {
            console.log('Yes, I am Done 1');
            resolve("Harry 1");
        }, 3000);
    }

})

/* Once my prom1 is resolved. We are printing the value with which it is resolved :). '.then()' is used to exectute a callback function in case if the Promise gets resolved, (In this case, we used it to get the data from the resolved request). '.catch' is used catch the error or reject statement and in this case we have logged it into the console. Suppose our server is down or their is some netwirk connectivity problem on user's end. That's why catch is important to display the issue to the users :- */

prom1.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})

/* We caught the error because we were getting the "No random Number was Supporting You" error 50% of the time becaise of the if else condition and reject in if condition. So we caught the error and logged it on the console */


/*                  =================================================================
                                            PROMISE API
                    =================================================================                */

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random Number was Supporting You 2")
    }

    else {
        setTimeout(() => {
            console.log('Yes, I am Done 2');
            resolve("Harry 2");
        }, 1000);
    }

})
// 1. Promise.all()
/*  --> Commented because of simplicity of understarding in the following examples
let p3 = Promise.all([prom1, prom2]);
p3.then((a) => {
    console.log(a);
}).catch(err => {
    console.log(err);
})
*/

//  We get an array of resolved values of prom1 and prom2 if and only if both of the promises get resolved

/* 2.> Promise.allSettled() : It does not matter if the promises passed in the array is resolved or rejected, we get the status(resolved or ejected) and reason (if rejected) for all promises passed in the array and reject. And we get status and  value of Resolve if the particilar promise is resolved. */

/* --> Commented because of simplicity of understarding in the following examples
let p3 = Promise.allSettled([prom1, prom2]);
p3.then((a) => {
    console.log(a);
}).catch(err => {
    console.log(err);
})
*/

/* 3.> Promise.race() : which ever promise in the array is resolved first gets executed first
*/
let p3 = Promise.race([prom1, prom2]);
p3.then((a) => {
    console.log(a);
}).catch(err => {
    console.log(err);
})

// Try pomise.any() yourself :)

