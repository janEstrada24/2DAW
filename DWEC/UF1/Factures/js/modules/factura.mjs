class Fila {
    constructor (article, quantitat) {
        this.article = article;
        this.quantitat = quantitat;
    }
    obtenirArticle() {
        return this.article;
    }
    obtenirQuantitat() {
        return this.quantitat;
    }
}

class Factura {
    constructor (arrayfiles) {
        this.arrayfiles = arrayfiles;
    }
    obtenirFiles() {
        return this.arrayfiles;
    }
}

export { Fila, Factura };