/**
 * funcion saludar
 * autor: mauricio noscue 
 * fecha: 17-06-2024
 */

function saludar(){
    let saludo = document.getElementById('txtsaludo').value
    document.getElementById('saludo').innerHTML=`<strong>${saludo}<strong>`
    return false
}




     