import { Article } from "./article.mjs";

function obtenirArticles() {
    let article1 = new Article(1111, "Pomes" , 1);
    let article2 = new Article(2222, "Rajola de xocolata" , 2);
    let article3 = new Article(3333, "Xupa-Xup" , 0.3);
    
    let arrayArticles = [ article1, article2, article3 ];

    return arrayArticles;
}

export { obtenirArticles };