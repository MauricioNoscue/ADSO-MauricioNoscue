function tablaDeMultiplicar (pnumero){
    let numero = pnumero;
    let tabla = 0;
    let par = 0;
    let impar = 0;
    let resultado = "";
    let multiplicacion;
    while(tabla < numero){
        tabla++;
        multiplicar = 0;
        while (multiplicar < numero){
            multiplicacion = tabla *(multiplicar+1);
            resultado += tabla+" x "+(multiplicar+1)+" = "+multiplicacion+"\n";
            if(multiplicacion %2 == 0){
                par++;
                resultado += "buzz"+"\n";
            }
                else{
                    impar++;
                    resultado += "bass"+"\n";
                    
                }
                multiplicar++;   
        }
   } 
   return resultado +par+"\n" +impar;

}


const tablaDeMultiplicar2 = function (pnumero){
    let numero = pnumero;
    let tabla = 0;
    let par = 0;
    let impar = 0;
    let resultado = "";
    let multiplicacion;
    while(tabla < numero){
        tabla++;
        multiplicar = 0;
        while (multiplicar < numero){
            multiplicacion = tabla *(multiplicar+1);
            resultado += tabla+" x "+(multiplicar+1)+" = "+multiplicacion+"\n";
            if(multiplicacion %2 == 0){
                par++;
                resultado += "buzz"+"\n";
            }
                else{
                    impar++;
                    resultado += "bass"+"\n";
                    
                }
                multiplicar++;
        }
   } 
   return resultado +par+"\n" +impar;

}

