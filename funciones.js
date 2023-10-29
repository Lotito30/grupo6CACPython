// API DE NOTICIAS EN INGLES
const keyNews = '3f27b46fc422421c834d14d8728ec116'

fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=3f27b46fc422421c834d14d8728ec116`)
  .then(response => response.json())
  .then(data => {
    console.log(data.articles[0])
    data.articles.forEach((news,index) => {
      if(index < 15){
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