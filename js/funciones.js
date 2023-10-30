// API DE NOTICIAS EN INGLES
const keyNews = '3f27b46fc422421c834d14d8728ec116'
const urlApi = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=3f27b46fc422421c834d14d8728ec116'
fetch(urlApi)
  .then(response => response.json())
  .then(data => {
    data.articles.forEach((news,index) => {
      if(index < 12){
      const article = document.createRange().createContextualFragment(/*html*/`
        <article class="escalar">
          <div class="contenedorImagen">
              <img src="${news.urlToImage}" alt="">
          </div>
          <h2>${news.author}</h2>
          <span>${news.title}</span>
        </article>
      `)
      const articulo = document.querySelector('#news')
      articulo.append(article)
      }
    }
    );
  })
  .catch(error => console.log(`Error: ${error}`));

const exp = document.querySelectorAll('.experiencia')

function animacionExperiencia() {
  exp.forEach(experiencia =>{
  const elementoTop = experiencia.getBoundingClientRect().top
  const windowHeight = window.innerHeight

    if (elementoTop < windowHeight){
      experiencia.classList.add('aparecer')
    }
  })
}
window.addEventListener('scroll',animacionExperiencia)
window.addEventListener('load',animacionExperiencia)


// RICK AND MORTY API
// function obtenerPersonajes(hecho) {
//     fetch('https://rickandmortyapi.com/api/character')
//     .then(response => response.json())
//     .then(data => {
//       hecho(data)
//     })
//   }

//  obtenerPersonajes(data => {
//  data.results.forEach(personaje => {
//       const article = document.createRange().createContextualFragment(/*html*/`
//           <article class="escalar">
//           <div class='contenedorImagen'>
//             <img src="${personaje.image}" alt="">
//           </div>
//           <h2>${personaje.name}</h2>
//           <span>${personaje.status}</span>
//           </article>
//       `);
//       const main = document.querySelector('#rickMorty')
//       main.append(article)
//  })
//  })