/**
 * funcion calcular la tabla del 9 multiplicando hasta 5 y calcular si el resultado es o no es impar 
 * autor: mauricio noscue 
 * fecha: 26-06-2024
 */

function operaciones(){
    let numero1 = parseFloat(document.getElementById('nota1').value);

    let numero = tablaa(numero1);

    document.getElementById('operaciones').innerHTML = ` 
     ${numero}<br>
     `;

    return false
}

function tablaa( ptabla){
    let numero = 5;
    let tabla = ptabla;
    let contador = 0;
    let multiplicacion = 0;
    let resultado = "" 
    while(contador<numero){
        contador++;
        multiplicacion  = tabla * contador;
        if(multiplicacion %2==0){
            resultado += tabla+"x"+contador+ "=" +multiplicacion + " es par"+ `<br>`;
        }
            else{
                resultado += tabla+"x"+contador+ "=" +multiplicacion + " es impar" + `<br>`;
            }
        }
     return resultado;    
}    


