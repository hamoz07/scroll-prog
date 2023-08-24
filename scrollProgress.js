// progress bar 
let prog = document.querySelector(".indicator")

let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollHeight);
console.log(totalHeight);

// console.log(document.documentElement.scrollTop);

window.addEventListener("scroll",()=>{
    let top = document.documentElement.scrollTop
    console.log(top);
    prog.style.width = `${(top / totalHeight) * 100}%`
})