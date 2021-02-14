const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    //split coge letra por letra y lo muestra 
    label.innerHTML = label.innerText.split('')
    //mao crea un array
        .map((letter, idx) => `<span style="transition-delay:${idx*50}ms">
        ${letter}</span>`)
        .join('')
});