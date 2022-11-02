function mostrarDadesResultants() {
    let quantitat = document.getElementsByClassName("dadesFactura")[2].value;
    let preu = parseFloat(document.getElementsByClassName("dadesFactura")[3].innerHTML);
    let total = (quantitat * preu).toFixed(2);
    console.log (total);
    let campTotal = document.getElementsByClassName("dadesFactura")[4];
    let campBaseImposable = document.getElementsByClassName("dadesResultants")[0];
    let campIva = document.getElementsByClassName("dadesResultants")[1];
    let campTotalResultant = document.getElementsByClassName("dadesResultants")[2];
    
    let preuTotal = parseFloat(total).toFixed(2);
    campBaseImposable.innerHTML = preuTotal;
    let iva = preuTotal * 0.21;
    iva = iva.toFixed(2);
    let totalResultant = preuTotal + iva;
    
    return [preuTotal, iva, totalResultant];
}

export { mostrarDadesResultants };