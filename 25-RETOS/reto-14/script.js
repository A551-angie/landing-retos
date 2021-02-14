const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    //se captura el evento en el boton 
    button.addEventListener('click', function (e) {
    
        const x = e.clientX
        const y = e.clientY

        //revisar 
        //console.log(x,y);

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        //console.log(buttonTop,buttonLeft);

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        //console.log(xInside,yInside);

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.top = xInside + 'px'

        this.appendChild(circle)
        setTimeout(()=>circle.remove(), 500)

    })
})