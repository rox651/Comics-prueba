// local reviews data
const comics = [
  {
    id: 1,
    name: "1. La Última Cacería De Kraven",
    author: "J. M. DeMatteis y Mike Zeck",
    img:
      "https://m.media-amazon.com/images/I/513jVgYbfTL.jpg",
    description:
      "J. M. DeMatteis y Mike Zeck narraron una de las mejores historias de Spiderman jamás contadas en la que aparentemente “Spiderman perdía y sucumbía” ante uno de sus peores enemigos: Kraven “El Cazador”.",
  },
  {
    id: 2,
    name: "2. Marvel Knights Spiderman",
    author: "Mark Millar, Frank Cho y Terry y Rachel Dodson",
    img:
      "https://www.comicverso.com/wp-content/uploads/2021/04/Marvel-Must-Have-Spiderman-entre-los-muertos-1.jpg",
    description:
      "Mark Millar, Frank Cho y Terry y Rachel Dodson se confabularon para narrar una de de las historias más revolucionarias e impactantes de Spiderman: el arco argumental conocido como “Entre los muertos”, que abarcó los números de “Marvel Knights: Spider-Man 1-12 USA”.",
  },
  {
    id: 3,
    name: "3- Superior Spiderman",
    author: "Dan Slott",
    img:
      "https://www.eslahoradelastortas.com/blog/media/2020/01/Spiderman-Superior-41-1.jpg",
    description:
      "En esta historia, el Doctor Octopus logró derrotar a Peter Parker, intercambiando mentes, dejando que el héroe muriera en su moribundo cuerpo. Sin embargo, lejos de iniciar un reinado del caos, utilizando la recién adquirida vida e identidad de Peter Parker, Otto Octavius opta por seguir las normas por las que honró su antecesor: todo gran poder conlleva una gran responsabilidad.",
  },
  {
    id: 4,
    name: "4- Spiderman",
    author: "Stan Lee y Steve Ditko",
    img:
      "https://http2.mlstatic.com/D_NQ_NP_694421-MLM41396201462_042020-V.jpghttps://static.wikia.nocookie.net/marveldatabase/images/6/6c/Amazing_Fantasy_Vol_1_15.jpg/revision/latest?cb=20170406022750",
    description:
      "No podemos cerrar este listado de los mejores cómics de Spiderman sin hablar de su origen. Claramente, si quieres leer lo mejor del Trepamuros, deberías también leer sus primeros cómics, de manos de sus padres: Stan Lee y Steve Ditko.",
  },
];


//buttons
const reverse = document.getElementById('btn-reverse')
const next = document.getElementById('btn-next')
const random = document.getElementById('btn-random')
let container = document.querySelector('.card')

//information
let title = document.querySelector('.card-title')
let img = document.getElementById('card-img')
let author = document.querySelector('.card-author')
let paragraph = document.querySelector('.card-paragraph')

//get elements

let comic = 0;


next.addEventListener('click',function(){
  comic++;
  if(comic > comics.length -1){
    comic = 0;
  }
  comicInfo()

})

reverse.addEventListener('click',function(){
  comic--;
  if(comic < 0){
    comic = comics.length -1;
  }
  comicInfo()
})

random.addEventListener('click',function(){
  comic = comicRandom()
  comicInfo()

})

window.addEventListener('DOMContentLoaded',function(){
  comicInfo()
})

function comicInfo(){
  let comicItem = comics[comic]
  title.textContent = comicItem.name;
  img.src = comicItem.img;
  author.textContent = comicItem.author
  paragraph.textContent = comicItem.description
}

function comicRandom(){
  return Math.floor(Math.random() * comics.length)
}
