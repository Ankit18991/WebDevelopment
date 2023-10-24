let sec = new Date(2023, 10,30, 0, 0 , 0, 0);
let s = sec.getSeconds();
let m  = sec.getMinutes();
let h = sec.getHours();

function stopwatch(){
    s++;
    if(s == 60)
    {
        s  =0;
        m++;
    }

    if(m == 60)
    {
        m = 0;
        h++;
    }

    so = (s < 10) ? ("0" + s) : s;
    mo = (m < 10) ? ("0" + m) : m;
    ho = (h < 10) ? ("0" + h) : h;

    document.getElementById('second').innerHTML = so;

    document.getElementById('minute').innerHTML = mo + " : ";

    document.getElementById('hour').innerHTML = ho + " : ";
}
var id=0;
function stopwatchCaller() {
    id= setInterval(stopwatch,1000);
}

function stopwatch_stopper(){
    clearInterval(id);
}

const start = document.querySelector('#icons img:nth-child(2)');
start.addEventListener('click', stopwatchCaller);

const stop = document.querySelector('#icons img:nth-child(3)');
stop.addEventListener('click',stopwatch_stopper);

function refresher(){
    s = -1;
    m = 0;
    h = 0;
    stopwatch();
    stopwatch_stopper();
}

const refresh = document.querySelector('#icons img:first-child');
refresh.addEventListener('click', refresher);

let control_Panel = document.querySelector('#icons');
control_Panel.addEventListener(
    'click', function run(){
        control_Panel.style.transform = 'translateY(60%)';
        control_Panel.style.backgroundColor = 'lightgreen';
        control_Panel.style.transition = 'all ease 1.5s';
    }
);