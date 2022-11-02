import { Article } from "./article.mjs";
import { Fila } from "./factura.mjs";
import { obtenirArticles } from "./obtenirArticles.mjs";

function numeroFactura() {
    let paragrafFactura = document.getElementsByTagName("p")[0];

    if (localStorage.getItem("numeroFactura") == null) {
        let numeroFactura = 1;
        paragrafFactura.innerHTML = "Numero Factura: 2022/" + numeroFactura;
        localStorage.setItem("numeroFactura", numeroFactura);
        console.log(numeroFactura);
    }
    else {
        let numeroFactura = parseInt(localStorage.getItem("numeroFactura"))  + 1;
        paragrafFactura.innerHTML = "Numero Factura: 2022/" + numeroFactura;
        localStorage.setItem("numeroFactura", numeroFactura);
        console.log(numeroFactura);
    }
    
}

function calcularQuantitat() {
    let campsQuantitat = document.getElementsByTagName("input");
    let campsPreu = document.getElementsByClassName("campPreu");
    let campsTotal = document.getElementsByClassName("campTotal");
    
    for (let i = 0; i < campsTotal.length; i++) {
        let preu = parseFloat(campsPreu[i]);

        campsTotal[i].innerHTML = preu * campsQuantitat[i].value;
        console.log(campsTotal[i].innerHTML);

    }
}


function afegirFila(contingutFila) {

    let article = contingutFila.obtenirArticle();
    let quantitat = contingutFila.obtenirQuantitat();

    let taula = document.getElementsByTagName("table")[0];
    
    let fila = document.createElement("tr");
    
    let casellaCodi = document.createElement("th");
    
    let casellaNom = document.createElement("th");
    
    let inputQuantitat = document.createElement("input");
    inputQuantitat.type = "number";
    inputQuantitat.className = "campQuantitat";
    
    let casellaQuantitat = document.createElement("th");
    
    let casellaPreu = document.createElement("th");
    casellaPreu.className = "campPreu";
    
    let casellaTotal = document.createElement("th");
    casellaTotal.className = "campTotal";
    casellaCodi.innerHTML = article.obtenirCodiArticle();
    casellaNom.innerHTML = article.obtenirNom();

    inputQuantitat.value = quantitat;
    let valorInput = inputQuantitat.value;
    
    casellaPreu.innerHTML = article.obtenirPreu();
    casellaTotal.innerHTML = "";
    fila.appendChild(casellaCodi);
    fila.appendChild(casellaNom);
    valorInput = inputQuantitat.addEventListener('change', () => calcularQuantitat(article.obtenirPreu(),valorInput));
    casellaQuantitat.appendChild(inputQuantitat);
    fila.appendChild(casellaQuantitat);
    fila.appendChild(casellaPreu);
    fila.appendChild(casellaTotal);
    taula.appendChild(fila);
}

function mostrarFactura() {

    let articleSeleccionat = document.getElementsByTagName("select")[0].value;

    if (articleSeleccionat != "Llistat Articles") {
        let arrayArticles = obtenirArticles();
        let articleAMostrar = new Article();

        for (let i = 0; i < arrayArticles.length; i++) {
            if (articleSeleccionat == arrayArticles[i].obtenirNom()) {
                articleAMostrar = arrayArticles[i];
            }
        }

        let fila = new Fila(articleAMostrar, 0);
        afegirFila(fila);




        /*campCodiArticle.innerHTML = articleAMostrar.obtenirCodiArticle();
        campNom.innerHTML = articleAMostrar.obtenirNom();
        campPreu.innerHTML = articleAMostrar.obtenirPreu();*/

        /*campQuantitat.addEventListener('change', () => calcularQuantitat(articleAMostrar.obtenirPreuArticle(), campQuantitat.value));
        campTotal.innerHTML = calcularQuantitat(articleAMostrar.obtenirPreuArticle(), campQuantitat.value) + "€";
        console.log(calcularQuantitat(articleAMostrar.obtenirPreuArticle(), campQuantitat.value));*/
        //campQuantitat.addEventListener('change', () => calcularQuantitat());
        //campTotal.innerHTML = calcularQuantitat() + "€";

    } else {
    }
}



export { mostrarFactura , calcularQuantitat , afegirFila , numeroFactura };