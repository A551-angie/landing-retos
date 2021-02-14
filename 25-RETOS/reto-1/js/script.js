

const panels = document.querySelectorAll('.panel')
//const panels = document.querySelector('.panel')
//const panels = document.getElementById('panel')
//const panels = document.getElementsByClassName('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        panel.classList.add('active')
        removeActiveClasses(panel);
    })
})

function removeActiveClasses(panelActive){
    panels.forEach((panel) => {
        if (panel == panelActive)
        {
        }
        else
        {
            panel.classList.remove('active')   
        }
    })
}