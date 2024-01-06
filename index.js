let a=document.getElementById("battery");
let b=document.getElementById("start");
if(b.textContent=="START"){
    b.onclick=()=>{
b.textContent="STOP";
a.style.animation="animation 6s 0s ease-out infinite normal";
b.remove();

}}  
