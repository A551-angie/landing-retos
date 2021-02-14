const container = document.getElementById('container')
const colors = ['#D1FF33', '#FF6433', '#C718BF', '#e67e22', '#2ecc71']
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` 
}

function removeColor(element) {
   element.style.background = ' rgb(73, 73, 78)'
   element.style.boxShadow = '0 0 2px  rgb(73, 73, 78)'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}