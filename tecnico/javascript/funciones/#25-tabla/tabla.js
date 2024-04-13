function tablaDeMultiplicar(ptabla, pmultiplicar) {
    let tabla = ptabla;
    let multiplicar = pmultiplicar;
    let resultado = 0;
    let par = 0;
    let impar = 0;
    let cTabla = 0;

    while(cTabla < tabla){
        let cMult = 0;
        cTabla++;
        while (cMult < multiplicar){
            cMult++;
            resultado = cTabla * cMult;
            if (resultado % 2 == 0) {
                par++;
                console.log(cTabla+"x"+cMult+ "=" +resultado+" bazz");
            } else {
                impar++;
                console.log(cTabla+"x"+cMult+ "=" +resultado+" buss");
            }
        }
    }
    console.log("hay "+par+" pares");
    console.log("hay "+impar+" impares");
    return resultado;
}

const tablaDeMultiplicar2 = function(ptabla, pmultiplicar) {
    let tabla = ptabla;
    let multiplicar = pmultiplicar;
    let resultado = 0;
    let par = 0;
    let impar = 0;
    let cTabla = 0;

    while(cTabla < tabla){
        let cMult = 0;
        cTabla++;
        while (cMult < multiplicar){
            cMult++;
            resultado = cTabla * cMult;
            if (resultado % 2 == 0) {
                par++;
                console.log(cTabla+"x"+cMult+ "=" +resultado+" bazz");
            } else {
                impar++;
                console.log(cTabla+"x"+cMult+ "=" +resultado+" buss");
            }
        }
    }
    console.log("hay "+par+" pares");
    console.log("hay "+impar+" impares");
    return resultado;
}