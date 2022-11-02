class Article {
    constructor (codiArticle, nom, preu) {
        this.codiArticle = codiArticle;
        this.nom = nom;
        this.preu = preu;
    }
    obtenirCodiArticle() {
        return this.codiArticle;
    }

    obtenirNom() {
        return this.nom;
    }

    obtenirPreu() {
        return this.preu;
    }
}

export { Article };