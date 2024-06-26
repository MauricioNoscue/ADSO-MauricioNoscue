/**
 * funcion calcular la tabla del 9 multiplicando hasta 5 y calcular si el resultado es o no es impar 
 * autor: mauricio noscue 
 * fecha: 26-06-2024
 */

function operaciones(){
    let numero1 = parseFloat(document.getElementById('nota1').value);

    let numero = numeros(numero1);

    document.getElementById('operaciones').innerHTML = ` 
     ${numero}<br>
     `;

    return false
}
function numeros(pnumero){
    let contar;
    let numero = pnumero;
    let resultado = ""
    for(contar = 1; contar<=numero; contar++){
        resultado += contar+`<br>`;
    }
    return resultado;
}  



