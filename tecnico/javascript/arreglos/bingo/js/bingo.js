
console.log("BINGO")
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




   
console.log("cantidad de pares e  impares")
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


console.log("LETRAS")


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


console.log("X GRANDE ")
let lax = [];

let sizeBingo = bingo.length;
for(let u = 0; u < sizeBingo; u++){
    lax.push(bingo[u][u])
    lax.push(bingo[u][sizeBingo - u - 1])
}

console.log(lax)

let equis1 = [];
for(iteracion1 = 0; iteracion1<3; iteracion1++){
    equis1.push(bingo[iteracion1][iteracion1+1])
}for(iteracion2 = 0; iteracion2<3; iteracion2++){
    equis1.push(bingo[iteracion2][4-(iteracion2+1)])
}
console.log("Equis1")
console.log(equis1)
// x pequeña 

let equis2 = [];
for( iteracion1 = 2; iteracion1<5; iteracion1++){
    equis2.push(bingo[iteracion1][iteracion1-2])
}for( iteracion2 = 2; iteracion2<5; iteracion2++){
    equis2.push(bingo[iteracion2][4-(iteracion2)])
}
console.log("Equis 2")
console.log(equis2)


let equis3 = [];
for(iteracion1 =2; iteracion1<5; iteracion1++){
    equis3.push(bingo[iteracion1][iteracion1])
}for(iteracion2 = 2; iteracion2<5; iteracion2++){
    equis3.push(bingo[iteracion2][8-(iteracion2 +2)])
}
console.log("equis 3")
console.log(equis3)
