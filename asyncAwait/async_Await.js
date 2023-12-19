/* Settle means resolve or reject. Resolve means promise has settled successfully. 
        Reject means Promise has not settled Successfully */


// async function getdata() {
//     // Simulating getting the data from the server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     })
// }

// Fetch API : In js, fetch API Can be used
async function getdata() {
    // Simulating getting the data from the server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // Fetch is an async function and returns a promise, that's why we are awaiting for it to fetch the data
    let data = await x.json(); 
    // It takes some time to parse the data into json. We are storing the returned promise. Promise was to parse the data into json/text into data variable(json is js object)
    // let data = await x.text();
    // console.log(data);
    return data;
}

async function main() {
    console.log('Loading Modules');
    console.log('Do Something Else');
    console.log('Load Data');

    let data = await getdata();
    // When the getData() function was async, and we did not use the 'await' keyword. The js engine just ignored getData() function . THis function was executes later, because of the aync nature of the javascript. BUt what if before we get The data using getData() function and the processing of the data begins in line Y. That would be worng and produce wrong Results. That is why we use the keyword 'await'. The getData() function was waited to be executed before the excution of line X and line Y. Once the promise(of getData() function) was resolved the execution continue.

    // We could have also done: data.then(() => {
    //              Without await, but we would have to use Call back function
    // })

    // We created a main() function because await is always used within an async function :)

    console.log(data); // --> Line X
    console.log('Process'); // --> Line Y
    console.log('Task 2');

}

main();

// Example POST method implementation:

async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data), 
    });
    return response.json(); 
  }
  
  postData("https://example.com/answer", { answer: 42 }).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  }); 
  