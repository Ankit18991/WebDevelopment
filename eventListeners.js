let button = document.getElementById("btn");

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML="<strong> Yayy You were Clicked </strong>"
})

button.addEventListener("contextmenu", ()=>{
    alert("Don't Hack us by right click Please");
})

document.addEventListener("keydown", (e)=>{ // 'e' is the event object
    console.log(e, e.key,e.keyCode);
})
