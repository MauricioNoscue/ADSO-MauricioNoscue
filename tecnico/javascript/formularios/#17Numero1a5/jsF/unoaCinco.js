/**
 * funcion numeros del no al cinco 
 * autor: mauricio noscue 
 * fecha: 26-06-2024
 */

function operaciones(){
    let numero1 = parseFloat(document.getElementById('nota1').value);

    let numero = calcular(numero1);

    document.getElementById('operaciones').innerHTML = ` 
     ${numero}
     `;

    return false
}

function calcular(pnumero){
    let numero = pnumero;
    let contador = 0;
    let resultado = ""
    while (contador <numero) {
        contador++;
        resultado += contador+"\n";
    }
    return resultado;
}