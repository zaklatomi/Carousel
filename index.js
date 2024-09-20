import Kartyak from './Kartyak.js';
import { carouselData } from './adatok.js';


const track = document.querySelector('.carouseltrack');
const rightButton = document.querySelector('.carouselbutton-right');
const leftButton = document.querySelector('.carouselbutton-left');
let currentIndex = 0;

new Kartyak(carouselData, track);

setEventListeners()
updateCarousel()
updateCarouselByPhotos()

function setEventListeners() {
    rightButton.addEventListener('click', () => moveToNextSlide());
    leftButton.addEventListener('click', () => moveToPreviousSlide());
};

function moveToNextSlide() {
    if (currentIndex === carouselData.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateCarousel();
};

function moveToPreviousSlide() {
    if (currentIndex === 0) {
        currentIndex = carouselData.length - 1;
    } else {
        currentIndex--;
    }
    updateCarousel();
};

function updateCarousel() {
    const main = document.querySelector('.carouselmain')
    const img = document.createElement('img')

    img.src = (carouselData[currentIndex].imgUrl)
    main.innerHTML = "";
    main.appendChild(img)
}

function updateCarouselByPhotos() {

    const kepek = document.querySelectorAll('.carouselElem')
    kepek.forEach((kep, index) => {
        kep.addEventListener('click', () => {
            // console.log(index);
            currentIndex = index;
            updateCarousel()
        });

    });
}
