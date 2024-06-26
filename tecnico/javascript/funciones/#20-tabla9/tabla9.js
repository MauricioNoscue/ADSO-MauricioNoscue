function tablaa( ptabla){
    let numero = 5;
    let tabla = ptabla;
    let contador = 0;
    let multiplicacion = 0;
    let resultado = "" 
    while(contador<numero){
        contador++;
        multiplicacion  = tabla * contador;
        if(multiplicacion %2==0){
            resultado += tabla+"x"+contador+ "=" +multiplicacion + " es par"+ "\n";
        }
            else{
                resultado += tabla+"x"+contador+ "=" +multiplicacion + " es impar" + "\n";
            }
        }
     return resultado;    
}    


const tablaa2 = function(ptabla){
    let numero = 5;
    let tabla = ptabla;
    let contador = 0;
    let multiplicacion = 0;
    let resultado = "" 
    while(contador<numero){
        contador++;
        multiplicacion  = tabla * contador;
        if(multiplicacion %2==0){
            resultado += tabla+"x"+contador+ "=" +multiplicacion + " es par"+ "\n";
        }
            else{
                resultado += tabla+"x"+contador+ "=" +multiplicacion + " es impar" + "\n";
            }
        }
     return resultado;  
}    

