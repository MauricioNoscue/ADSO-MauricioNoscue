/**
 * funcion calcular figuras 
 * autor: mauricio noscue 
 * fecha: 24-06-2024
 */

function operaciones(){
    let lado = parseFloat(document.getElementById('txtlado').value);
    let baseR = parseFloat(document.getElementById('txtbaseRectangulo').value);
    let alturaR = parseFloat(document.getElementById('txtalturaRectangulo').value);
    let baseT = parseFloat(document.getElementById('txtbaseTriangulo').value);
    let alturaT = parseFloat(document.getElementById('txtalturaTriangulo').value);
    

    let cuadradoo = cuadrado(lado);
    let rectanguloo  = rectangulo(baseR, alturaR);
    let trianguloo = triangulo(baseT, alturaT);

    document.getElementById('operaciones').innerHTML =  `
    <strong>Area cuadrado: </strong> ${cuadradoo}<br>
    <strong>Area rectangulo: </strong> ${rectanguloo}<br>
    <strong>Area triangulo : </strong> ${trianguloo}<br>
    `;
    return false
}

function cuadrado (pladoC){
    let ladoc = pladoC;
    let resultado;
    resultado = ladoc * ladoc
    return resultado; 

}

function rectangulo (pbaseR, palturaR){
    let baseR = pbaseR;
    let alturaR = palturaR;
    let resultado;
    resultado = baseR * alturaR;
    return resultado; 

}

function triangulo (pbaseT, palturaT){
    let baset = pbaseT;
    let alturat = palturaT;
    let resultado;
    resultado = (baset * alturat) / 2;
    return resultado;

}

