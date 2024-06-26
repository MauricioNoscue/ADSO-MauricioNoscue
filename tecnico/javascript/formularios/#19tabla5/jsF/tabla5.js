/**
 * funcion calcular la tabla del 5 
 * autor: mauricio noscue 
 * fecha: 26-06-2024
 */

function operaciones(){
    let numero1 = parseFloat(document.getElementById('nota1').value);

    let numero = tablaMultiplicar(numero1);

    document.getElementById('operaciones').innerHTML = ` 
     ${numero}<br>
     `;

    return false
}

function tablaMultiplicar(ptabla){
    let tabla = ptabla;
    let contador = 0;
    let multiplicacion;
    let resultado = ""
    while (contador<tabla){
        contador++;
        multiplicacion = tabla * contador;
        resultado += tabla+"x"+contador+"= "+multiplicacion+`<br>`;
    }
    return resultado; 
}    

