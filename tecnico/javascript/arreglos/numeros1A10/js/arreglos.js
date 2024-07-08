/**
 * numeros del uno al diez 
 * Autor: Mauricio Noscue 
 * Fehca: 08/07/2024
 */


let arreglo = [];
let iteracion;
let resultaLista ="";
let numero;


arreglo = [1,2,3,4,5,6,7,8,9,10];

for (iteracion = 0; iteracion < arreglo.length; iteracion++) {
    resultaLista += `<option>`+arreglo[iteracion]+ `</option>`;
}


document.getElementById(`lista-numeros`).innerHTML = resultaLista;

arreglo = [];
 for(iteracion = 0; iteracion < 10; iteracion++){
    numero = iteracion +1;
    arreglo.push(numero);
 }

 resultaLista = "";
 for(iteracion = 0; iteracion < arreglo.length; iteracion++){
    resultaLista += `<option>`+arreglo[iteracion]+ `</option>`
 }

 document.getElementById(`lista-dos-numeros`).innerHTML = resultaLista;


