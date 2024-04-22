function mayor(pnota1, pnota2, pnota3){
    let nota1 = pnota1;
    let nota2 = pnota2;
    let nota3 = pnota3;
    if(nota1 == nota2 && nota1 == nota3 && nota2 == nota3){
        return "Todos son iguales";
    }else{
        if(nota1 > nota2 && nota1 > nota3){
            return "La nota 1 es mayor: " + nota1;
        }else{
            if(nota2 > nota1 && nota2 > nota3){
                return "La nota 2 es mayor: " + nota2;
            }else{
                return "La nota 3 es mayor: " + nota3;

            }
        }
    }

}




const mayor2 = function(pnota1, pnota2, pnota3){
    let nota1 = pnota1;
    let nota2 = pnota2;
    let nota3 = pnota3;
    if(nota1 == nota2 && nota1 == nota3 && nota2 == nota3){
        return "Todos son iguales";
    }else{
        if(nota1 > nota2 && nota1 > nota3){
            return "La nota 1 es mayor: " + nota1;
        }else{
            if(nota2 > nota1 && nota2 > nota3){
                return "La nota 2 es mayor: " + nota2;
            }else{
                return "La nota 3 es mayor: " + nota3;

            }
        }
    }

}