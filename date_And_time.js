let time = new Date();
// document.getElementById('time').innerHTML = time;
console.log(time);

let date = new Date(0);
// document.getElementById('time').innerHTML = date;
console.log(date);
// It gives a reference date form the beginning

let date_later = new Date(5000);
// document.getElementById('time').innerHTML = date_later;
console.log(date_later);
// Gives the time 5000ms(5 s) later than the reference time...

let present_Date = new Date("2034-10-30");
// document.getElementById('time').innerHTML = present_Date;
console.log(present_Date);

// Another way to initialize date
// Syntax: <variable> = new Date(year, month, date, hour, minutes, seconds, milliseconds);
    let newDate = new Date(2023, 10, 30, 3, 23, 56, 1002);
    // It automatically converts 1002 milli secs to ( 1 sec + 2 millisecond)
    // document.getElementById('time').innerHTML = newDate;
    console.log(newDate);

// function to know date time and year directly without having to look at that long format
let yr = newDate.getFullYear();
console.log(yr);
// document.getElementById('time').innerHTML = yr;

let month = newDate.getMonth();
// document.getElementById('time').innerHTML = month;

let hou = newDate.getHours();
// document.getElementById('time').innerHTML = hou;

let second = time.getSeconds();
console.log(second);
// document.getElementById('time').innerHTML = second;

// let millisecond = time.getMilliseconds();
// console.log(millisecond);
// document.getElementById('time').innerHTML = millisecond; --> Nothing wrong with these srtamenets just commented out for comfortability of the programmer

// Setting a stop Watch Structure
console.log(newDate);


let timer = new Date(2023, 10, 30, 0, 0, 0, 0); 
let h = timer.getHours();
let m = timer.getMinutes();
let s = timer.getSeconds();
let mill = timer.getMilliseconds();

function updateTime(){
    
    // mill++;
    // if(mill == 1000)
    // {
    //     s++;
    //     mill = 0;
    // }  --> To add milliseconds

    s++;
    if (s == 60)
    {
        s = 0;
        m++;
    }
    
    if(m == 60)
    {
        m = 0;
        h++;
    }

    let houro = (h < 10 ) ? ("0" + h) : h;
    let mino = (m < 10) ? ("0" + m) : m;
    let seco = (s < 10) ? ("0" + s) : s;
    // let mil = (mill < 10) ? ("0" + mill) : mill;  --> To add Milli second
    
    document.getElementById('timer').innerHTML = houro + " : " + mino + " : " + seco;
}
setInterval(updateTime, 1000);
// The function is called every 1s and 1000 ms...

