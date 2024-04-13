function tablaa(ptabla, pnumero, presultado){
    let tabla = ptabla;
    let numero = pnumero;
    let resultado = presultado;
    let contador;
    for(contador =1; contador<=numero; contador++){
        resultado = tabla * contador;
        if(resultado % 2 == 0){
            console.log(tabla+"x"+contador + "="+resultado+" es par");
        } else{
            console.log(tabla+"x"+contador + "="+resultado+" es impar");
        }
    }
    return resultado;

}

const tablaa2 = function(ptabla, pnumero, presultado){
    let tabla = ptabla;
    let numero = pnumero;
    let resultado = presultado;
    let contador;
    for(contador =1; contador<=numero; contador++){
        resultado = tabla * contador;
        if(resultado % 2 == 0){
            console.log(tabla+"x"+contador + "="+resultado+" es par");
        } else{
            console.log(tabla+"x"+contador + "="+resultado+" es impar");
        }
    }
    return resultado;

}