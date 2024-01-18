let a=document.getElementById("battery");
let b=document.getElementById("start");
let cb=document.createElement("button");
cb.textContent=("STOP");
cb.setAttribute("id","stop")
let c=document.getElementById("container");
cb.onclick=()=>{
    a.style.animation="";
    document.location.reload();
    
}
b.onclick=()=>{
    b.textContent="STOP";
    a.style.animation="animation 6s 0s ease-out infinite normal";
    b.remove();
    c.after(cb);
    }

