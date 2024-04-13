function edad1(pfechaAct, pfechaN) {
    let fechaAct = pfechaAct;
    let fechaN = pfechaN;
    let edad;
    
    edad = fechaAct - fechaN;
    if (edad >= 18) {
        console.log("Es mayor de edad: ");
        return   edad;
        
    } else {
        console.log("No es mayor de edad: ");
        return   edad;
    }
}

function promedio(pedad1, pedad2, pedad3) {
    let edad1 = pedad1;
    let edad2 = pedad2;
    let edad3 = pedad3;
    let prom;
    prom = (edad1 + edad2 + edad3) / 3;
    if (prom >= 18) {
        console.log("El promedio sí está en la mayoría de edad: ");
        return   prom;
    } else {
        console.log("El promedio no está en la mayoría de edad: " );
        return  prom;
    }
}

/**
 * constantes
 */

const edad2 = function (pfechaAct, pfechaN) {
    let fechaAct = pfechaAct;
    let fechaN = pfechaN;
    let edad;
    
    edad = fechaAct - fechaN;
    if (edad >= 18) {
        console.log("Es mayor de edad: ");
        return   edad;
        
    } else {
        console.log("No es mayor de edad: ");
        return   edad;
    }       
}

const promedio2 = function (pedad1, pedad2, pedad3) {
    let edad1 = pedad1;
    let edad2 = pedad2;
    let edad3 = pedad3;
    let prom;
    prom = (edad1 + edad2 + edad3) / 3;
    if (prom >= 18) {
        console.log("El promedio sí está en la mayoría de edad: ");
        return   prom;
    } else {
        console.log("El promedio no está en la mayoría de edad: " );
        return  prom;
    }
}







