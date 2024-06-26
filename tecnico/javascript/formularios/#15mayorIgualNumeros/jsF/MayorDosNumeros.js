/**
 * funcion calcular cual de los dos numeros es mayor o si son iguales  
 * autor: mauricio noscue 
 * fecha: 26-06-2024
 */

function operaciones(){
    let numero1 = parseFloat(document.getElementById('nota1').value);
    let numero2 = parseFloat(document.getElementById('nota2').value);
    
    let mayor;
    if(numero1 != numero2){
        if(numero1 > numero2){
            mayor = "El numero uno es mayor y es: "+ numero1;
        }else{
            mayor = "El numero dos   es mayor y es: "+ numero2;
        }
    }else{
        mayor = "Los numeros son iguales y son: "+ numero1 +" " +numero2;
    }

    document.getElementById('operaciones').innerHTML =  mayor ;

    return false
}
  