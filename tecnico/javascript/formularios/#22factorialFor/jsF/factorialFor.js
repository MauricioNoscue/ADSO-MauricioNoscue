/**
 * funcion calcular la factrial de un numero utilizando el ciclo for 
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
    let factorial = 1;
    let contador;
    for(contador = 1; contador <= numero; contador++){
        factorial = factorial * contador;
        
    }
        
        return factorial;
}
 


