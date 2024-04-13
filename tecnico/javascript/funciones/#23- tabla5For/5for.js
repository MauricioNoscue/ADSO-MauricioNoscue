function tablaMultiplicar (ptabla, presultado){
    let tabla = ptabla;
    let resultado = presultado;
    let contador;
    for(contador = 1; contador <= tabla; contador++){
        resultado = tabla * contador;
        console.log(tabla+"x"+contador+"="+resultado);
    }
    return resultado;
}

const  tablaMultiplicar2 = function (ptabla, presultado){
    let tabla = ptabla;
    let resultado = presultado;
    let contador;
    for(contador = 1; contador <= tabla; contador++){
        resultado = tabla * contador;
        console.log(tabla+"x"+contador+"="+resultado);
    }
    return resultado;
}