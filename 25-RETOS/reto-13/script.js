const result = document.getElementById('result')
const filter = document.getElementById('filter')
// se crea una constante con un array vacio
const listItems = []

getData()
// con filter filtramos la data y solo nos trae el dato pedido
filter.addEventListener('input', (e) => filterData(e.target.value))

//se crea una funcion asincrona para recibir la data
async function getData() {
    //la api se guarda en res
    const res = await fetch('https://randomuser.me/api?results=50')
    //convierte la data el .json
    const { results } = await res.json()

    //limpia el resiltado
    result.innerHTML = ''

    
    results.forEach(user => {
        // creamos una lista
        const li = document.createElement('li')

        //con el push enviamos la lista la contante listItems que se creo con el array vacio
        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
} 