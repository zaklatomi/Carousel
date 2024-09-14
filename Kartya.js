export default class Kartya {
    #kep = {}; //privát adattag
  
    constructor(kep, szuloElem) {
      /*inicializálja az adattagokat*/
        this.#kep = kep;
        this.szuloElem =szuloElem;
        this.kepKeszit();
    }

    kepKeszit(){
        this.szuloElem.append(`<li class = "kiskepek" ></li>`)
    }

}