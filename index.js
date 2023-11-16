let lighting1 = document.getElementById('img1');
let lighting2 = document.getElementById('img2');
let lighting3 = document.getElementById('img3');

let line1 = document.getElementById('card-1');
let line2 = document.getElementById('card-2');
let line3 = document.getElementById('card-3');

line1.addEventListener('mouseover', () =>{
    lighting1.style.filter = brightness(1);
    lighting1.style.cursor = pointer;
});

line2.addEventListener('mouseover', () =>{
    lighting2.style.filter = brightness(1);
});

line3.addEventListener('mouseover', () =>{
    lighting3.style.filter = brightness(1);
});
