
function tablaMultiplicar(ptabla){
    let tabla = ptabla;
    let contador = 0;
    let multiplicacion;
    let resultado = ""
    while (contador<tabla){
        contador++;
        multiplicacion = tabla * contador;
        resultado += tabla+"x"+contador+"= "+multiplicacion+"\n";
    }
    return resultado; 
}    



const tablaMultiplicar2 = function(ptabla){
    let tabla = ptabla;
    let contador = 0;
    let multiplicacion;
    let resultado = ""
    while (contador<tabla){
        contador++;
        multiplicacion = tabla * contador;
        resultado += tabla+"x"+contador+"= "+multiplicacion+"\n";
    }
    return resultado; 
}    

