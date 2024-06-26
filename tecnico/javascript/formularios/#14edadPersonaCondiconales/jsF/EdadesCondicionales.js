/**
 * funcion calcular si una persona es o no es mayor de edad 
 * autor: mauricio noscue 
 * fecha: 26-06-2024
 */

function operaciones(){
    let persona1 = parseFloat(document.getElementById('nota1').value);
    
    let mayor;
    if(persona1 >= 18){
        mayor = "La persona es mayor de edad y su edad es: " + persona1;
    }else{
        mayor = mayor = "La persona es menor de edad y su edad es: " + persona1;
    }   

    document.getElementById('operaciones').innerHTML = "El mayor es: " + mayor ;

    return false
}
