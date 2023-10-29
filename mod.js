console.log(" I  Am In the module file of the Javascript");
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum+=element;
    });

    return (sum/arr.length);
}

function sum(a,b){
    return (a+b);
}

module.exports = average;
// Exporting the fucntion average to some other javascript file/folder
// Similarly We can write different modules for each functionality like face recognition and let other programmers use it.
// By this way in node.js we can explicity mention which fucntions., classes and object is to be exported By us and can give it to other modules

// To export multiple things at a time, we use module.exports object
module.exports = {
    summ : sum,
    name: "Utkarsh",
    Designaton: " Programmer"
};

module.exports.name = "Suraj(The changed name)";
// Because module.exports is an object