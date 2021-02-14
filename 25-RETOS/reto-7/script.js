const textEl = document.getElementById('text')
const speedEl =document.getElementById('speed')
let idx = 1
let speed =   300 /speedEl.value
const text = textEl.innerHTML;

writeText()

function writeText(){
    textEl.innerText = text.slice(0,idx);

    idx++

    if(idx > text.length) {
        idx = 1
        //console.log(idx)
    }

   setTimeout(writeText, speed)
}


speedEl.addEventListener('click', (e) => {speed = 300 / e.target.value}); 