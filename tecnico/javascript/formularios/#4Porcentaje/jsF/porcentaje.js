/**
 * funcion calcular porcentajes
 * autor: mauricio noscue 
 * fecha: 24-06-2024
 */

function operaciones(){
    let numero1 = parseFloat(document.getElementById('txtnumero1').value);
    let porcentajes = porcentaje(numero1);
    document.getElementById('operaciones').innerHTML =  ` <strong>Porcentaje:</strong> ${porcentajes}<br>`;
    
    return false
}


function porcentaje(pnumero){
    let numero = pnumero;
    let porcentaje;
    porcentaje = numero / 100;
    return porcentaje;
}

