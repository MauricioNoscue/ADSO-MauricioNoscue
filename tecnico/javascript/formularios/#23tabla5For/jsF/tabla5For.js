/**
 * funcion calcular la factrial de un numero utilizando el ciclo for 
 * autor: mauricio noscue 
 * fecha: 26-06-2024
 */

function operaciones(){
    let numero1 = parseFloat(document.getElementById('nota1').value);

    let numero = tablaMultiplicar(numero1);

    document.getElementById('operaciones').innerHTML = ` 
     ${numero}
     `;

    return false
}

function tablaMultiplicar (ptabla){
    let tabla = ptabla;
    let multiplicacion = 0;
    let contador;
    let resultado = ""
    for(contador = 1; contador <= tabla; contador++){
        multiplicacion = tabla * contador;
        resultado +=tabla+"x"+contador+"="+multiplicacion+`<br>`;
    }
    return resultado;
}
 


