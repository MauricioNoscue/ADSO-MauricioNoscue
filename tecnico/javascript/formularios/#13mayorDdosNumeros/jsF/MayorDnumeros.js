/**
 * funcion calcular cual es el mayor de dos numeros 
 * autor: mauricio noscue 
 * fecha: 26-06-2024
 */

function operaciones(){
    let numeroUno = parseFloat(document.getElementById('nota1').value);
    let numeroDos = parseFloat(document.getElementById('nota2').value);
    let mayor;
    if(numeroUno > numeroDos){
        mayor = numeroUno;
    }else{
        mayor = numeroDos;
    }

    document.getElementById('operaciones').innerHTML = "El mayor es: " + mayor ;

    return false
}
