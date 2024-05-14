/**
 * mauricio noscue
 * 29 abril 2024
 * primer ejercico arreglos
 */

let arregloNumero = [];
let arregloFruta = [];
arregloNumero = [2,4,6,8,10,12,14,16,17,18]
arregloFruta = ["Mora", "Piña", "fresa", "limón", "Naranja", "Guanabana"];

let sizeArrayFrutas = arregloFruta.length
let sizeArrayNumero = arregloNumero.length
let iteracion;


console.log("Arrego de números : "+arregloNumero)
console.log("Arreglo de frutas: "+arregloFruta)
console.log("Arreglo fruta: " + arregloFruta[3])
console.log("Arreglo número: " + arregloNumero[6])

for(iteracion = 0; iteracion< sizeArrayFrutas ; iteracion++){
    console.log("Números "+ iteracion+ ": "+ arregloNumero[iteracion])
}

let matriz =[]
matriz =[
    
    [2,3,4,5],
    [9,8,7],
    [3,5,7,8,9],
]
console.log("Matriz")
console.log(matriz)



console.log("hola")
let contador;
let sizeArrayMatriz = matriz.length
for(iteracion =0; iteracion<sizeArrayMatriz; iteracion++){
    let sizeInterno = matriz[iteracion].length
    for(contador = 0; contador<sizeInterno; contador ++){
        console.log("Matriz "+ matriz[iteracion][contador])
    }
}








