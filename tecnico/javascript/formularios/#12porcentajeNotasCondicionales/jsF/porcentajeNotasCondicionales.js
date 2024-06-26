/**
 * funcion calcular Porcentaje de notas con condicionales 
 * autor: mauricio noscue 
 * fecha: 26-06-2024
 */

function operaciones(){
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);

    let  porcentaje1 = calcularNota(nota1,0.2);
    let  porcentaje2 = calcularNota(nota2, 0.35);
    let  porcentaje3 = calcularNota(nota3, 0.45);

    let  notafinal = calcularNotaFinal(porcentaje1,porcentaje2,porcentaje3);

    
    document.getElementById('operaciones').innerHTML =  `
    <strong> Porcentaje Nota 1: </strong> ${porcentaje1}<br>
    <strong> Porcentaje Nota 2: </strong> ${porcentaje2}<br>
    <strong> Porcentaje Nota 3: </strong> ${porcentaje3}<br>
    <strong> Notas final: </strong> ${notafinal}<br>
   
    `;
    return false
}

function calcularNota (pnota, pporcen){
    let nota = pnota;
    let porcen = pporcen;
    let total;
    total = nota * porcen;
    return total;
}

function calcularNotaFinal(pnota1, pnota2, pnota3){
    let nota1 = pnota1;
    let nota2 = pnota2;
    let nota3 = pnota3;
    let promedio;
    promedio = (nota1 + nota2 + nota3) ;
    if(promedio > 4.5){
        return "Nota superior: "+ promedio;
    }else{
        if(promedio <= 4.5 && promedio >3.5){
            return "Nota buena: "+ promedio;
        }else{
            if(promedio <3.5 && promedio>3){
                return "Nota media: "+ promedio;
            }else{
                return "Nota mala: "+ promedio
            }
        }
    }

}
