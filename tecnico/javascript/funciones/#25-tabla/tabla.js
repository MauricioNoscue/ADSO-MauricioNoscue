function tablaDeMultiplicar(ptabla) {
    let tabla = ptabla;
    let resultado = "";
    let par = 0;
    let impar = 0;
    let cTabla = 0;
    let multiplicacion = 0;

    while(cTabla < tabla){
        let cMult = 0;
        cTabla++;
        while (cMult < tabla){
            cMult++;
            multiplicacion = cTabla * cMult;
            if (multiplicacion % 2 == 0) {
                par++;
                resultado += cTabla+"x"+cMult+ "=" +multiplicacion+" bazz"+"\n";
            } else {
                impar++;
                resultado += cTabla+"x"+cMult+ "=" +multiplicacion+" buss"+"\n";
            }
        }
    }
    
    return resultado +"hay "+par+" pares" +"\n" +" hay "+impar+" impares"+"\n";
}

const tablaDeMultiplicar2 = function(ptabla) {
    let tabla = ptabla;
    let resultado = "";
    let par = 0;
    let impar = 0;
    let cTabla = 0;
    let multiplicacion = 0;

    while(cTabla < tabla){
        let cMult = 0;
        cTabla++;
        while (cMult < tabla){
            cMult++;
            multiplicacion = cTabla * cMult;
            if (multiplicacion % 2 == 0) {
                par++;
                resultado += cTabla+"x"+cMult+ "=" +multiplicacion+" bazz"+"\n";
            } else {
                impar++;
                resultado += cTabla+"x"+cMult+ "=" +multiplicacion+" buss"+"\n";
            }
        }
    }
    
    return resultado +"hay "+par+" pares" +"\n" +" hay "+impar+" impares"+"\n";
}
 
