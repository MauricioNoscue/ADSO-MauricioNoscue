function calcularNota (pnota, pporcen){
    let nota = pnota;
    let porcen = pporcen;
    let total;
    total = nota * porcen;
    return total;
}

function calcularNotaFinal(pnota1, pnota2, pnota3){
    let nota1 = pnota1;
    let nota2 = pnota2;
    let nota3 = pnota3;
    let promedio;
    promedio = (nota1 + nota2 + nota3) ;
    if(promedio > 4.5){
        return "Nota superior: "+ promedio;
    }else{
        if(promedio <= 4.5 && promedio >3.5){
            return "Nota buena: "+ promedio;
        }else{
            if(promedio <3.5 && promedio>3){
                return "Nota media: "+ promedio;
            }else{
                return "Nota mala: "+ promedio
            }
        }
    }

}


//constante

const calcularNota2 = function (pnota, pporcen){
    let nota = pnota;
    let porcen = pporcen;
    let total;
    total = nota * porcen;
    return total;
}

const calcularNotaFinal2 = function(pnota1, pnota2, pnota3){
    let nota1 = pnota1;
    let nota2 = pnota2;
    let nota3 = pnota3;
    let promedio;
    promedio = (nota1 + nota2 + nota3) ;
    if(promedio > 4.5){
        return "Nota superior: "+ promedio;
    }else{
        if(promedio <= 4.5 && promedio >3.5){
            return "Nota buena: "+ promedio;
        }else{
            if(promedio <3.5 && promedio>3){
                return "Nota media: "+ promedio;
            }else{
                return "Nota mala: "+ promedio
            }
        }
    }

}