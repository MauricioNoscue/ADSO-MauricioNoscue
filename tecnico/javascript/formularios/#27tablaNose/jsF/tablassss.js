/**
 * funcion calcular las tablas  utilizando el ciclo while
 * autor: mauricio noscue 
 * fecha: 26-06-2024
 */

function operaciones(){
    let numero1 = parseFloat(document.getElementById('nota1').value);

    let numero = tablaDeMultiplicar(numero1);

    document.getElementById('operaciones').innerHTML = ` 
     ${numero}
     `;

    return false
}

function tablaDeMultiplicar (pnumero){
    let numero = pnumero;
    let tabla = 0;
    let par = 0;
    let impar = 0;
    let resultado = "";
    let multiplicacion;
    while(tabla < numero){
        tabla++;
        multiplicar = 0;
        while (multiplicar < numero){
            multiplicacion = tabla *(multiplicar+1);
            resultado += tabla+" x "+(multiplicar+1)+" = "+multiplicacion+`<br>`;
            if(multiplicacion %2 == 0){
                par++;
                resultado += "buzz"+`<br>`;
            }
                else{
                    impar++;
                    resultado += "bass"+`<br>`;
                    
                }
                multiplicar++;   
        }
   } 
   return resultado +par+"\n" +impar;

}