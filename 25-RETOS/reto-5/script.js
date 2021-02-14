const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let int = setInterval(blurring, 30)
let timeReduce=0.01;
let milisegundos = 30;
let opacity = 1;

function blurring() {
    
    if(load==100){
       clearInterval(int)
    }

    loadText.innerText = `${load}%`;
    load++;
    loadText.style.opacity = opacity;
    opacity= opacity - timeReduce; 
    milisegundos = milisegundos-0.3;
    bg.style.filter =`blur(${milisegundos}px)` ;   
}

   