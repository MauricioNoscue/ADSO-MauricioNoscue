function tablaa(pnumero, ptabla, pcontador,presultado){
    let numero = pnumero;
    let tabla = ptabla;
    let contador = pcontador;
    let resultado = presultado;

    while(contador<numero){
        contador++;
        resultado = tabla * contador;
        if(resultado%2==0){
            console.log(tabla+"x"+contador+ "=" +resultado+ " es par");
        }
            else{
                console.log(tabla+"x"+contador+ "=" +resultado+ " es impar");
            }
        }
     return resultado;   
}    


const tablaa2 = function(pnumero, ptabla, pcontador,presultado){
    let numero = pnumero;
    let tabla = ptabla;
    let contador = pcontador;
    let resultado = presultado;

    while(contador<numero){
        contador++;
        resultado = tabla * contador;
        if(resultado%2==0){
            console.log(tabla+"x"+contador+ "=" +resultado+ " es par");
        }
            else{
                console.log(tabla+"x"+contador+ "=" +resultado+ " es impar");
            }
        }
     return resultado;   
}    