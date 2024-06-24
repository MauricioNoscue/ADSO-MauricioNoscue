/**
 * funcion calcular edades y mostrar si es mayor o menor de edad 
 * autor: mauricio noscue 
 * fecha: 24-06-2024
 */

function operaciones(){
    let persona1 = parseFloat(document.getElementById('txtpersona1').value);
    let persona2 = parseFloat(document.getElementById('txtpersona2').value);
    let persona3 = parseFloat(document.getElementById('txtpersona3').value);

    let Uno = edad1(2024,persona1);
    let Dos = edad1(2024,persona2);
    let Tres = edad1(2024,persona3);

    let mayor11 = mayor1(Uno);
    let mayor2 = mayor1(Dos);
    let mayor3 = mayor1(Tres);

    let promedio = promedio1(Uno, Dos, Tres);
    
    document.getElementById('operaciones').innerHTML =  `
    <strong> Persona1: </strong> ${mayor11}<br>
    <strong> Persona2: </strong>  ${mayor2}<br>
    <strong> Persona3 : </strong>    ${mayor3}<br>
    <strong> ${promedio} </strong>
    `;
    return false
}


function edad1(pfechaAc, pfechaN){
    let fechaAc = pfechaAc;
    let fechaN = pfechaN;
    let edad;
    edad = fechaAc -fechaN;
    return edad;
}

function mayor1(pedad){
    let edadD = pedad;
    if(edadD >= 18){
    return "Es mayor de edad: "+ edadD;
    }else{
        return "No es mayor de edad: "+ edadD;

    }
}
    
function promedio1(pedadUno, pedadDos, pedadTres){
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

