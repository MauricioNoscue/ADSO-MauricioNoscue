/**
 * funcion calcular porcentajes de tres notas 
 * autor: mauricio noscue 
 * fecha: 24-06-2024
 */

function operaciones(){
    let numero1 = parseInt(document.getElementById('txtnumero1').value);
    let numero2 = parseInt(document.getElementById('txtnumero2').value);
    let numero3 = parseInt(document.getElementById('txtnumero3').value);
    let promedios = promedio(numero1, numero2, numero3);
    document.getElementById('operaciones').innerHTML =  `<strong>Promedio:</strong> ${promedios}<br>`;
    
    return false
}

function promedio (pnota1, pnota2, pnota3){
    let nota1 = pnota1
    let nota2 = pnota2
    let nota3 = pnota3
    let promedio = (nota1 + nota2 + nota3) /3
    return promedio;
}
