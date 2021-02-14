const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => {
    arrow()
});


close.addEventListener('click', () => {
    remove()
});


function arrow(){
    return container.classList.add('show-nav')
}
function remove(){
    return container.classList.remove('show-nav')
}