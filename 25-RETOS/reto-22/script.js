const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('li')

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {

        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[idx].classList.add('show')   
    })
})

function hideAllContents() {

    contents.forEach(element => {

        element.classList.remove('show')           
    });
}
function hideAllItems() {
    listItems.forEach(element => {

        element.classList.remove('active')       
    });
}