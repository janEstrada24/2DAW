function crearMenu() {

    document.getElementsByTagName("option")[0].innerText="Tria";
    
    const families = ["Taronges", "Llimones", "Peres"];
    families.sort();

    const menu = document.getElementsByTagName("select")[0];
    
    for (let i = 0; i < families.length ;i++) {
        let opcio = document.createElement("option");
        opcio.text = families[i];
        menu.append(opcio);
    }
}

function canviarImatgeUbicacions(ubicacions) {
    let passadis = ubicacions[0].value;
    let estanteria = ubicacions[1].value;
    let forat = ubicacions[2].value;
    
    let imatgesU = document.getElementsByClassName("imgU");
    
    if (testPassadis(passadis) == true) {
        imatgesU[0].src="../imatges/tic.png";
    } else {
        imatgesU[0].src="../imatges/creu.png";
    }
    
    if (testEstanteria(estanteria) == true) {
        imatgesU[1].src="../imatges/tic.png";
    } else {
        imatgesU[1].src="../imatges/creu.png";
    }

    if (testForat(forat) == true) {
        imatgesU[2].src="../imatges/tic.png";
    } else {
        imatgesU[2].src="../imatges/creu.png";
    }
}


function testCodiArticle(cadena) {
    const regExp = /^[A-Za-z]{3}\-[0-9]{7}\-[A-Z]$/;
    return regExp.test(cadena);
}

function testCaracteristiques(dades) {
    const regExp = /^[0-9]+$/;
    return regExp.test(dades);
}

function testPassadis(cadena) {
    const regExp = /^P\-[0-9]{2}\-E$|^P\-[0-9]{2}\-D$/;
    return regExp.test(cadena);
}

function testEstanteria(cadena) {
    const regExp = /^EST\+[0-9]{2}\.[0-9]{2}$/;
    return regExp.test(cadena);
}

function testForat(cadena) {
    const regExp = /^[0-9]{2}\*[A-Za-z]{3}\*[0-9]{2}\\[0-9]{2}$/;
    return regExp.test(cadena);
}


function imprimirFamilia(familia) {
    let resultat = "Família: " + familia + "<br>";
    return resultat;
}

function imprimirCodi(codi) {
    let resultat = "";
    resultat += "Codi: " + codi + "<br>";
    
    return resultat;
}

function imprimirNom(nom) {
    let resultat = ""; 
    resultat = "Nom: " + nom + "<br>";
    return resultat;
}

function imprimirCaracteristiques(amplada,llargada,altura) {
    let resultat = "";
    
    resultat = "Característiques: " + amplada + " x " + llargada + " x " + altura + "<br>";
    return resultat;
}

function imprimirUbicacio(passadis,estanteria,forat) {
    let resultat = "";
    resultat += "Ubicació: " + passadis + " " + estanteria + " " + forat + "<br>";
    
    return resultat;
}

function imprimirValors() {
    const familiaSeleccionada = document.getElementsByTagName("select")[0].value;
    
    const nom = document.getElementsByTagName("input")[0].value;
    const codiArticle = document.getElementsByTagName("input")[1].value;

    const caracteristiques = document.getElementsByClassName("caracteristiques");
    let amplada = caracteristiques[0].value;
    let llargada = caracteristiques[1].value;
    let altura = caracteristiques[2].value;

    const ubicacions = document.getElementsByClassName("ubicacions");
    let passadis = ubicacions[0].value;
    let estanteria = ubicacions[1].value;
    let forat = ubicacions[2].value;

    if (familiaSeleccionada != "Tria" && nom != "" && testCodiArticle(codiArticle)
        && testCaracteristiques(amplada) == true && testCaracteristiques(llargada) == true && testCaracteristiques(altura) == true 
        && testPassadis(passadis) == true && testEstanteria(estanteria) == true && testForat(forat) == true) {
        let resultat = ""; 
        resultat += imprimirFamilia(familiaSeleccionada);
        resultat += imprimirCodi(codiArticle);
        resultat += imprimirNom(nom);
        resultat += imprimirCaracteristiques(amplada,llargada,altura);
        resultat += imprimirUbicacio(passadis,estanteria,forat);
        document.getElementsByTagName("p")[0].innerHTML = resultat;
    } else {
        document.getElementsByTagName("p")[0].innerHTML = "DADES INACABADES O INCORRECTES";
    }    
}

window.onload = function start() {
    crearMenu();

    let ubicacions = document.getElementsByClassName("ubicacions");
    for (let i=0; i < ubicacions.length; i++) {
        ubicacions[i].addEventListener("change", () => canviarImatgeUbicacions(ubicacions));
    }
    const boto = document.getElementsByTagName("button")[0];
    boto.addEventListener("click",imprimirValors);
}
