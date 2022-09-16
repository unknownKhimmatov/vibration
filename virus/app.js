const button = document.getElementById("button")
button.addEventListener("click",(()=>{
    navigator.vibrate([2000]);
}))