function factorial (pnumero){
    let numero = pnumero;
    let contador = 0;
    let factorial = 1;
    let resultado = "";
    while(contador < numero){
        contador++;
        factorial = factorial * contador;
    } 
        resultado += factorial;
        return resultado;
}

const factorial2 = function (pnumero){
    let numero = pnumero;
    let contador = 0;
    let factorial = 1;
    let resultado = "";
    while(contador < numero){
        contador++;
        factorial = factorial * contador;
    } 
        resultado += factorial;
        return resultado;
}


