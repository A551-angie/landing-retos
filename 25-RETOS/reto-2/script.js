const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
    
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
     
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
            
        } else {
            circle.classList.remove('active')
            //console.log(circle)
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        
        prev.disabled = true;
        next.disabled = false;

    } else if(currentActive === circles.length) {
        
        next.disabled = true;
        prev.disabled = false;
        //console.log(next)
    } else {
        next.disabled = false;
        prev.disabled = false;
        
    }
}