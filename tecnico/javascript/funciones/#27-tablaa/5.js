function tablaDeMultiplicar (pnumero){
    let numero = pnumero;
    tabla = 0;
    par = 0;
    impar = 0;
    resultado = 0;
    while(tabla < numero){
        tabla++;
        multiplicar = 0;
        while (multiplicar < numero){
            resultado = tabla *(multiplicar+1);
            console.log(tabla+" x "+(multiplicar+1)+" = "+resultado);
            if(resultado %2 == 0){
                par++;
                console.log("buzz");
            }
                else{
                    impar++;
                    console.log("bass");
                    
                }
                multiplicar++;
        }
   } console.log(par)
   console.log(impar)
   return resultado;

}


const tablaDeMultiplicar2 = function (pnumero){
    let numero = pnumero;
    tabla = 0;
    par = 0;
    impar = 0;
    resultado = 0;
    while(tabla < numero){
        tabla++;
        multiplicar = 0;
        while (multiplicar < numero){
            resultado = tabla *(multiplicar+1);
            console.log(tabla+" x "+(multiplicar+1)+" = "+resultado);
            if(resultado %2 == 0){
                par++;
                console.log("buzz");
            }
                else{
                    impar++;
                    console.log("bass");
                    
                }
                multiplicar++;
        }
   } console.log(par)
   console.log(impar)
   return resultado;

}