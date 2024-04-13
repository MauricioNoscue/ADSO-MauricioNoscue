function factorial (pnumero, pcontador, pfactorial){
    let numero = pnumero;
    let contador = pcontador;
    let factorial = pfactorial;
    while(contador < numero){
        contador++;
        factorial = factorial * contador;
    } 
        console.log(factorial);
        return factorial;
}

const factorial2 = function (pnumero, pcontador, pfactorial){
    let numero = pnumero;
    let contador = pcontador;
    let factorial = pfactorial;
    while(contador < numero){
        contador++;
        factorial = factorial * contador;
    } 
        console.log(factorial);
        return factorial;
}