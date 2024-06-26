/**
 * funcion calcular la factorial 
 * autor: mauricio noscue 
 * fecha: 26-06-2024
 */

function operaciones(){
    let numero1 = parseFloat(document.getElementById('nota1').value);

    let numero = factorial(numero1);

    document.getElementById('operaciones').innerHTML = ` 
     ${numero}
     `;

    return false
}
function factorial (pnumero){
    let numero = pnumero;
    let contador = 0;
    let factorial = 1;
    let resultado = "";
    while(contador < numero){
        contador++;
        factorial = factorial * contador;
    } 
        resultado += factorial;
        return resultado;
}