let btn = document.querySelector("button");
let int = setInterval(change,1.5)
function change(){
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let rgb = `rgb(${r},${g},${b})`;
  btn.style.backgroundColor = rgb; 
}

btn.addEventListener("click", function(){
  clearInterval(int);
})
