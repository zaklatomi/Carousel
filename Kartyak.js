import  Kartya  from './Kartya.js';


export default class Kartyak {

    #lista = []

    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.#kepekMegjelenit();
    }

    #kepekMegjelenit() {

        this.#lista.forEach((kep) => {
            new Kartya(kep, this.szuloElem)
        });

    }


}
