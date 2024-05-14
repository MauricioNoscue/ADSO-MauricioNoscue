let bingo = [];
let iteracion1;
let iteracion2;
let tabla;
let contador = 0;

for(iteracion1= 0; iteracion1 <5; iteracion1++){
    let interno = [];
    for(iteracion2 = 0; iteracion2 <5; iteracion2++){
        contador = contador +1;
        tabla = contador*3;
        interno.push(tabla);

    }
    bingo.push(interno);
}
console.log(bingo)


function extraerX(bingo) {
    const elementosExtraidos = [];
    const n = bingo.length;
    for (let i = 0; i < n; i++) {
        elementosExtraidos.push(bingo[i][i]);  // Elementos de la diagonal principal
        elementosExtraidos.push(bingo[i][n - i - 1]);  // Elementos de la diagonal secundaria
    }
    return elementosExtraidos;
    }

    const elementosX = extraerX(bingo);
    console.log("Elementos de la 'X':", elementosX);


let cantidadImpares = 0;
let cantidadPares = 0;
 // 
for(iteracion1= 0; iteracion1 <5; iteracion1++){
    for(iteracion2 = 0; iteracion2 <5; iteracion2++){
        if(bingo[iteracion1][iteracion2] %2 == 0){
            cantidadPares = cantidadPares +1

        }else{
            cantidadImpares = cantidadImpares +1
        }
    }
    
}

console.log ("pares: " + cantidadPares)
console.log("impares: "+ cantidadImpares)
// letrab

console.log("B")
let letraB = [];

for(iteracion1 = 0; iteracion1<5; iteracion1++){
    letraB.push(bingo[iteracion1][0]);

}
console.log(letraB);


// letra i

console.log("I")
let letraI = [];
for(iteracion1 = 0; iteracion1<5; iteracion1++){
    letraI.push(bingo[iteracion1][1]);
}
console.log(letraI);


// letra n
console.log("N")
let letraN = [];
for(iteracion1 = 0; iteracion1<5; iteracion1++){
    letraN.push(bingo[iteracion1][2]);
}
console.log(letraN);


console.log("G")
// letra g
let letraG = [];
for(iteracion1 = 0; iteracion1<5; iteracion1++){
    letraG.push(bingo[iteracion1][3]);
}
console.log(letraG);



console.log("O")
// letra o 

let letraO = [];
for(iteracion1 = 0; iteracion1<5; iteracion1++){
    letraO.push(bingo[iteracion1][4]);
}
console.log(letraO);


// letra x
