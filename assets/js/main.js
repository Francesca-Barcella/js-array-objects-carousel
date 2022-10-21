/**************************************************************************** 
Dato un array di oggetti letterali con:
url dell’immagine
titolo
descrizione Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1 (opzionale):
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2  (opzionale):
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3  (opzionale):
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
STRUTTURA DATI:
Ecco la struttura dati da usare (le immagini sono le stesse della volta scorsa)
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

****************************************************************************/

//Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

const slides = [
    {
        image: '01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },

    {
        image: '02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },

    {
        image: '03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },

    {
        image: '04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },

    {
        image: '05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
console.log(slides);


// seleziono gli elementi della dom
const slidesEl = document.querySelector('.slides');
const precedenteEl = document.querySelector('.precedente');
const successivaEl = document.querySelector('.successiva');
console.log(slidesEl, precedenteEl, successivaEl);

const srcStart = './assets/img/';
let activeImg = 0;

for (let i = 0; i < slides.length; i++) {

    const slide = slides[i];
    const imgSrc = imageSrc(srcStart, slide.image);

    const cardSlide = `
     <div>
     <img class="img-fluid ${i === activeImg ? 'active' : ''}" src="${imgSrc}"/>
        <h4>${slide.title}</h4>
        <h6>${slide.text}</h6>
    </div>`;
    console.log(cardSlide);

    slidesEl.insertAdjacentHTML('beforeend', cardSlide);

}


function imageSrc(url_1, url_2) {
    const totalSrc = (url_1 + url_2);
    return totalSrc;
}


// eventlistner sul pulsante precedente e successiva per alternare le immagini active
// devo definire la prima immagine active con valore = 0 e incremntarle poi nel ciclo for
// const imgMarkup = `<img class="img-fluid ${i === activeImage ? 'active' : ''}" src="${slideUrl}" alt= "">`;

successivaEl.addEventListener('click', function () {
    console.log('Ho cliccato su next');

    //cambierà l’immagine attiva
    // selezionare dalla dom l'immagine attualmente attiva
    const activeSlideElement = document.querySelector('.slides > img.active')
    console.log(slides[activeImg]);

    console.log(activeSlideElement);
    // tolgo all'immagine la classe active
    activeSlideElement.classList.remove('active');
    // incremento active image di 1
    activeImg++ // activeImg = activeImg + 1
    console.log(activeImg); // al primo click il valore da 0 diventa 1
    // seleziono tutte le immagini
    const allSlides = document.getElementsByClassName('img-fluid')
    // sleziono l'immagine successiva
    const nextSlideElement = allSlides[activeImg];
    // aggiungo alla slide successiva la class active
    nextSlideElement.classList.add('active')

});


precedenteEl.addEventListener('click', function () {
    console.log('Ho cliccato su prev');
    //cambierà l’immagine attiva
    // selezionare dalla dom l'immagine attualmente attiva
    const activeSlideElement = document.querySelector('.slides > img.active')
    console.log(activeSlideElement);
    // tolgo all'immagine la classe active
    activeSlideElement.classList.remove('active');
    // incremento active image di 1
    activeImg-- // activeImg = activeImg + 1
    console.log(activeImg); // al primo click il valore da 0 diventa 1
    // seleziono tutte le immagini
    const allSlides = document.getElementsByClassName('img-fluid')
    // sleziono l'immagine successiva
    const nextSlideElement = allSlides[activeImg];
    // aggiungo alla slide successiva la class active
    nextSlideElement.classList.add('active')
});

