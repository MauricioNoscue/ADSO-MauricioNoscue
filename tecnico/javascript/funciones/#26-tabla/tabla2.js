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
                resultado+= cTabla+"x"+cMult+ "=" +multiplicacion+" bazz"+ "\n";
            }
                else{
                    impar ++;
                    resultado+= cTabla+"x"+cMult+ "=" +multiplicacion+" bazz"+ "\n";
                }
        }
    }              
                    return resultado + "hay "+par+" pares" +"\n"  + "hay "+impar+" impares" +"\n";

}

const tablaDeMultiplicar2 = function(ptabla){
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
                resultado+= cTabla+"x"+cMult+ "=" +multiplicacion+" bazz"+ "\n";
            }
                else{
                    impar ++;
                    resultado+= cTabla+"x"+cMult+ "=" +multiplicacion+" bazz"+ "\n";
                }
        }
    }              
                    return resultado + "hay "+par+" pares" +"\n"  + "hay "+impar+" impares" +"\n";

}

  