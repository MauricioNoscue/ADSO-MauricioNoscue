const edad2 = function(pfechaAc, pfechaN){
    let fechaAc = pfechaAc;
    let fechaN = pfechaN;
    let edad;
    edad = fechaAc -fechaN;
    return edad;
}

const mayor2 = function(pedad){
    let edadD = pedad;
    if(edadD >= 18){
    return "Es mayor de edad: "+ edadD;
    }else{
        return "No es mayor de edad: "+ edadD;

    }
}
    
const promedio2 = function(pedadUno, pedadDos, pedadTres){
    let edadUno = pedadUno;
    let edadDos = pedadDos;
    let edadTres = pedadTres;
    let promedio;
    promedio = (edadUno + edadDos + edadTres)/3;
    if(promedio >= 18){
        return "El promedio está en la mayoria de edad: "+ promedio;
    }else{
        return "El promedio no  está en la mayoria de edad: "+ promedio;

    }

}


