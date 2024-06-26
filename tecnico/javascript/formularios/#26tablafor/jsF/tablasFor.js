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

function tablaDeMultiplicar(ptabla){
    let tabla = ptabla;
    let cTabla;
    let cMult;
    let multiplicacion = 0;
    let par = 0;
    let impar = 0;
    let resultado = ""
    for(cTabla = 1; cTabla<= tabla; cTabla++){
        for(cMult =1; cMult<= tabla; cMult++ ){
            multiplicacion = cTabla * cMult;
            if (multiplicacion %2 == 0){
                par ++;
                resultado+= cTabla+"x"+cMult+ "=" +multiplicacion+" bazz"+ `<br>`;
            }
                else{
                    impar ++;
                    resultado+= cTabla+"x"+cMult+ "=" +multiplicacion+" bazz"+ `<br>`;
                }
        }
    }              
                    return resultado + "hay "+par+" pares" +`<br>`  + "hay "+impar+" impares" +`<br>`;

}