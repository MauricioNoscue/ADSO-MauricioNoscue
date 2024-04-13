function calcular(pnumero,pfactoria){
    let numero = pnumero;
    let factorial = pfactoria;
    let contador;
    
    for(contador = 1; contador <= numero; contador++){
        factorial = factorial * contador;
    }
        console.log(factorial);
        return factorial;
}


const  calcular2 = function(pnumero,pfactoria){
    let numero = pnumero;
    let factorial = pfactoria;
    let contador;
    
    for(contador = 1; contador <= numero; contador++){
        factorial = factorial * contador;
    }
        console.log(factorial);
        return factorial;
}