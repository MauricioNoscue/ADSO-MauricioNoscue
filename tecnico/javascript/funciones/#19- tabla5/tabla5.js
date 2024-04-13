
function tablaMultiplicar(ptabla, pcontador, presultado){
    let tabla = ptabla;
    let contador = pcontador;
    let resultado = presultado;

    while (contador<tabla){
        contador++;
        resultado = tabla * contador;
        console.log(tabla+"x"+contador+"= "+resultado);
    }
    return resultado; 
}    



const tablaMultiplicar2 = function(ptabla, pcontador, presultado){
    let tabla = ptabla;
    let contador = pcontador;
    let resultado = presultado;

    while (contador<tabla){
        contador++;
        resultado = tabla * contador;
        console.log(tabla+"x"+contador+"= "+resultado);
    }
    return resultado; 
}    