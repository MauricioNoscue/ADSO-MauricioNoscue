/**
 * Ejercicio uno arreglos
 * autor :  Mauricio Noscue 
 */

let arregloNumeros = [];
let numerosDatos;
let iteracion;
let datosArreglo = "";
arregloNumeros = [2, 4, 6, 8, 10 , 12, 14, 16];
numerosDatos = arregloNumeros.length;


console.log("Valores iniciales: "+ arregloNumeros);
console.log("Númer de Datos : "+ numerosDatos);


arregloNumeros.push(18)
arregloNumeros.push(20)
arregloNumeros.push(22)


numerosDatos = arregloNumeros.length;
console.log("Valores Finales : "+ arregloNumeros);
console.log("Númer de Datos : "+ numerosDatos);

for(iteracion = 0; iteracion < numerosDatos; iteracion++){
    console.log("Datos "+ iteracion + ": "+ arregloNumeros[iteracion] );
    datosArreglo += "Datos "+ iteracion + ": "+ arregloNumeros[iteracion] +"\n"

}
alert(datosArreglo)

