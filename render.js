let search = document.querySelector(".search");
let frame = document.querySelector(".frame");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let refresh = document.querySelector(".refresh");

search.addEventListener("change",(e)=>{
    redirect(e.target.value);
})
search.addEventListener("keyup",(e)=>{
    if(e.keycode !== 13) return
    redirect(e.target.value);
})
function redirect(url){
    frame.src = url || 'https://juejin.cn/'
}

left.addEventListener("click",()=>{
    history.go(-1)
})
right.addEventListener("click",()=>{
    history.go(1)
})
refresh.addEventListener("click",()=>{
    let src = frame.src
    ipcRenderer.send("refresh",src)
})
ipcRendereron('sendUrl',frame,search)