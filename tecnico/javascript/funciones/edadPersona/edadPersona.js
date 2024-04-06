function edad1 (pfechaNaci, pfechaAct){
    let fechaNaci = pfechaNaci;
    let fechaAct = pfechaAct;
    let edad;
    edad = fechaAct - fechaNaci
    if(edad>=18){
        return "Es mayor de edad "+edad;
    }else{
        return "Es menor de edad "+edad; 
    }
}

    const edad2 = function (pfechaNaci, pfechaAct){
    let fechaNaci = pfechaNaci;
    let fechaAct = pfechaAct;
    let edad;
    edad = fechaAct - fechaNaci
    if(edad>=18){
        return "Es mayor de edad "+edad;
    }else{
        return "Es menor de edad "+edad; 
    }
}