import { obtenirArticles } from "./obtenirArticles.mjs";

function emplenarMenu() {
    let arrayArticles = obtenirArticles();

    const menu = document.getElementsByTagName("select")[0];
    document.getElementsByTagName("option")[0].innerText = "Llistat Articles";

    for (let i = 0; i < arrayArticles.length; i++) {
        let opcio = document.createElement("option");
        opcio.text = arrayArticles[i].obtenirNom();
        menu.append(opcio);
    }
}

export { emplenarMenu };