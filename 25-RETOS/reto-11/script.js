//se llama la clase joke
const jokeEl = document.querySelector('.joke')
const jokeBtn = document.getElementById('jokeBtn')
//console.log(jokeEl)
jokeBtn.addEventListener('click', generateJoke)

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    
    headers: {
      Accept: 'application/json',
    },
   
  }
  //console.log(config)
  const res = await fetch('https://icanhazdadjoke.com', config)
       .then((res) => res.json())
       .then((data) => {
         jokeEl.innerHTML = data.joke
       })
  

  //const res = await ('', config)

  //const data = await res.json()

  //jokeEl.innerHTML = data.joke()
}

//   HINTS
// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   >>fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }