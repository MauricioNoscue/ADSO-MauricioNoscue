/**
 * funcion calcular porcentajes de tres notas 
 * autor: mauricio noscue 
 * fecha: 24-06-2024
 */

function operaciones(){
    let numero1 = parseInt(document.getElementById('txtnumero1').value);
    let numero2 = parseInt(document.getElementById('txtnumero2').value);
    let numero3 = parseInt(document.getElementById('txtnumero3').value);

    let promedio1 = porNota(numero1, 0.3);
    let promedio2 = porNota(numero2, 0.3);
    let promedio3 = porNota(numero3, 0.4);

    let sumaTotal = promedio(promedio1, promedio2, promedio3);

    document.getElementById('operaciones').innerHTML =  `
    <strong>Porcentaje Nota1:</strong> ${promedio1}<br>
    <strong>Porcentaje Nota2:</strong> ${promedio2}<br>
    <strong>Porcentaje Nota3:</strong> ${promedio3}<br>
    <strong>Porcentaje Total:</strong> ${sumaTotal}<br>
    `;
    return false
}

function porNota(pnota, pporcentaje){
    let nota = pnota;
    let porcentaje = pporcentaje;
    let resultado;
    resultado = nota * porcentaje;
    return resultado;
}

function promedio (pnota1, pnota2, pnota3){
    let nota1 = pnota1
    let nota2 = pnota2
    let nota3 = pnota3
    let promedio = (nota1 + nota2 + nota3)
    return promedio;
}
