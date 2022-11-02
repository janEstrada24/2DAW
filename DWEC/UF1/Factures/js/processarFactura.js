import { mostrarFactura , calcularQuantitat, numeroFactura } from "./modules/mostrarFactura.mjs";
import { emplenarMenu } from "./modules/emplenarMenu.mjs";
window.onload = function start() {
    numeroFactura();
    emplenarMenu();
    const botoAfegir = document.getElementsByTagName("button")[0];
    const campQuantitat = document.getElementsByClassName("dadesFactura")[2];

    botoAfegir.addEventListener('click', () => mostrarFactura());
    let arrayinputs = document.getElementsByTagName("input"); 
    for (let i = 0; i < arrayinputs.length; i++) {
        arrayinputs[i].addEventListener('change', () => calcularQuantitat());
    }
}