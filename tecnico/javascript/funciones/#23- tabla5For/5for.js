function tablaMultiplicar (ptabla){
    let tabla = ptabla;
    let multiplicacion = 0;
    let contador;
    let resultado = ""
    for(contador = 1; contador <= tabla; contador++){
        multiplicacion = tabla * contador;
        resultado +=tabla+"x"+contador+"="+multiplicacion+"\n";
    }
    return resultado;
}

const  tablaMultiplicar2 = function (ptabla){
    let tabla = ptabla;
    let multiplicacion = 0;
    let contador;
    let resultado = ""
    for(contador = 1; contador <= tabla; contador++){
        multiplicacion = tabla * contador;
        resultado +=tabla+"x"+contador+"="+multiplicacion+"\n";
    }
    return resultado;
}

