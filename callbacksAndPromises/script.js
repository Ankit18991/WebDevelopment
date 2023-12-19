// Call back fucntions are the functions which runs within a function. Callback Function is a function passed into another function as an argument , which is then invoked inside the outer function to complete an action

const fn = () => {
    console.log("Nothing");
}

const callback = (arg,fn) => {
    console.log(arg)
    fn();
    // We may or may not pass the callback function as argument in the outer function :)
}

const loadScript = (src1, callback) => {
    let sc = document.createElement("script");
    sc.setAttribute("src", src1);
    // --> Also sc.src = src1;
    sc.onload = callback("Harry is a good Boy. He had to worry About ",fn)
    document.head.append(sc);

}

/* --> onload function : It is an event handler in JS that is commonly used with elements like images,scripts, and iframes. It is triggered when the associated resources has been completely loaded. */

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);