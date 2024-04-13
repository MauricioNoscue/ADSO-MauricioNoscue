function tablaDeMultiplicar(ptabla,pmultiplicar){
    let tabla = ptabla;
    let multiplicar = pmultiplicar;
    let cTabla;
    let cMult;
    let resultado = 0;
    let par = 0;
    let impar = 0;
    for(cTabla = 1; cTabla<= tabla; cTabla++){
        for(cMult =1; cMult<= multiplicar; cMult++ ){
            resultado = cTabla * cMult;
            if (resultado %2 == 0){
                par ++;
                console.log(cTabla+"x"+cMult+ "=" +resultado+" bazz");
            }
                else{
                    impar ++;
                    console.log(cTabla+"x"+cMult+ "=" +resultado+" bazz");
                }
        }
    }               console.log("hay "+par+" pares");
                    console.log("hay "+impar+" impares");
                    return resultado;

}

const tablaDeMultiplicar2 = function(ptabla,pmultiplicar){
    let tabla = ptabla;
    let multiplicar = pmultiplicar;
    let cTabla;
    let cMult;
    let resultado = 0;
    let par = 0;
    let impar = 0;
    for(cTabla = 1; cTabla<= tabla; cTabla++){
        for(cMult =1; cMult<= multiplicar; cMult++ ){
            resultado = cTabla * cMult;
            if (resultado %2 == 0){
                par ++;
                console.log(cTabla+"x"+cMult+ "=" +resultado+" bazz");
            }
                else{
                    impar ++;
                    console.log(cTabla+"x"+cMult+ "=" +resultado+" bazz");
                }
        }
    }               console.log("hay "+par+" pares");
                    console.log("hay "+impar+" impares");
                    return resultado;

}