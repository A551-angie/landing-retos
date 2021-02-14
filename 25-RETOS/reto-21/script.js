const insert = document.getElementById('insert')
const key = document.getElementById("key");
const keycode1 = document.getElementById("key-code");
const code1 = document.getElementById("code");
const start = document.getElementById("start");
const visibles = document.querySelectorAll('.visible');


window.addEventListener('keydown', (event) => {
  console.log(event);
  key.innerHTML = event.key;
  keycode1.innerText = event.keyCode;
  code1.innerText=event.code;

  visibles.forEach(element => {
    element.style.display = "flex"
    
  })

  start.style.display = "none"
})




