/**
 * funcion saludar
 * autor: mauricio noscue 
 * fecha: 17-06-2024
 */

function operaciones(){
    let numero1 = parseInt(document.getElementById('txtnumero1').value);
    let numero2 =  parseInt(document.getElementById('txtnumero2').value);
    let sumar;
    let restar;
    let multiplicar;
    let dividir;
    let rsumar;
    let rrestar;
    let rmultiplicar;
    let rdividir;

    sumar = numero1 + numero2;
    restar = numero1 - numero2;
    multiplicar = numero1 * numero2;
    dividir = numero1 / numero2;

    rsumar= `Suma: ${sumar} <br>`;
    rrestar= `restar: ${restar} <br>`;
    rmultiplicar = `multiplicacio: ${multiplicar} <br>`
    rdividir = ` dividir: ${dividir} <br>`

    document.getElementById('operaciones').innerHTML = rsumar +rrestar + rmultiplicar + rdividir;

    return false
}




