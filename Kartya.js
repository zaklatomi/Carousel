export default class Kartya {

    #kep = {};

    constructor(kep, szuloElem) {
        this.#kep = kep;
        this.szuloElem = szuloElem;
        this.createElement();
    }

    createElement() {

        const li = document.createElement('li');

        const img = document.createElement('img');
        img.classList.add("carouselElem");
        img.src = this.#kep.imgUrl;
        img.alt = this.#kep.title;


        li.appendChild(img);



        this.szuloElem.appendChild(li);
    }
}
