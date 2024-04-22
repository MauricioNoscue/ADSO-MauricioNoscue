function tablaa(ptabla){
    let tabla = ptabla;
    let numero = 5;
    let multiplicacion = 0;
    let contador;
    let resultado =""
    for(contador =1; contador<=numero; contador++){
        multiplicacion = tabla * contador;
        if(multiplicacion % 2 == 0){
            resultado += tabla+"x"+contador + "="+multiplicacion+" es par"+"\n";
        } else{
            resultado += tabla+"x"+contador + "="+multiplicacion+" es impar"+"\n";
        }
    }
    return resultado;

} 

const tablaa2 = function(ptabla){
    let tabla = ptabla;
    let numero = 5;
    let multiplicacion = 0;
    let contador;
    let resultado = ""
    for(contador =1; contador<=numero; contador++){
        multiplicacion = tabla * contador;
        if(multiplicacion % 2 == 0){
            resultado += tabla+"x"+contador + "="+multiplicacion+" es par"+"\n";
        } else{
            resultado += tabla+"x"+contador + "="+multiplicacion+" es impar"+"\n";
        }
    }
    return resultado;

}

