// Call back fucntions are the functions which runs within a function. Callback Function is a function passed into another function as an argument , which is then invoked inside the outer function to complete an action
const fn3 = () => {
    console.log("\n I am the fourth call");
}

const fn2 = (args, fn3) => {
    console.log("I am third Call back");
    console.log(args);
    fn3();
}

const fn = (fn2) => {
    console.log("I am Second CallBack");
    fn2("I am I am going into callback hell. I am being hard to be managed",fn3);
}

const loadScript = (src1, callback) => {
    let sc = document.createElement("script");
    sc.setAttribute("src", src1);
    // --> Also sc.src = src1;
    sc.onload = callback("Harry is a good Boy. He had to worry About ")
    document.head.append(sc);

}

/* --> onload function : It is an event handler in JS that is commonly used with elements like images,scripts, and iframes. It is triggered when the associated resources has been completely loaded. */

/* We can also pass the call back function itself, in place of its name ) */
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (arg) => {
    console.log(arg)
    fn(fn2);
});

/* Promises: A promise is the solution to the call back hell . The call back hell can be hard to manage. That why a promise used. A promise is the primise of Code Execution*/