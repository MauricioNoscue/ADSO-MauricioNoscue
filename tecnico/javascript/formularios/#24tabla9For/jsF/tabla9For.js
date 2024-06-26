/**
 * funcion calcular la tabla del 9  utilizando el ciclo for 
 * autor: mauricio noscue 
 * fecha: 26-06-2024
 */

function operaciones(){
    let numero1 = parseFloat(document.getElementById('nota1').value);

    let numero = tablaa(numero1);

    document.getElementById('operaciones').innerHTML = ` 
     ${numero}
     `;

    return false
}

function tablaa(ptabla){
    let tabla = ptabla;
    let numero = 5;
    let multiplicacion = 0;
    let contador;
    let resultado =""
    for(contador =1; contador<=numero; contador++){
        multiplicacion = tabla * contador;
        if(multiplicacion % 2 == 0){
            resultado += tabla+"x"+contador + "="+multiplicacion+" es par"+`<br>`;
        } else{
            resultado += tabla+"x"+contador + "="+multiplicacion+" es impar"+`<br>`;
        }
    }
    return resultado;

}   

