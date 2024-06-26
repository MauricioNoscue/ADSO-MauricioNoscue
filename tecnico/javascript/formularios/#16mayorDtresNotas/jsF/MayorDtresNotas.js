/**
 * funcion calcular entre tres otas cual es mayor 
 * autor: mauricio noscue 
 * fecha: 26-06-2024
 */

function operaciones(){
    let numero1 = parseFloat(document.getElementById('nota1').value);
    let numero2 = parseFloat(document.getElementById('nota2').value);
    let numero3 = parseFloat(document.getElementById('nota3').value);

    let mayorr = mayor(numero1, numero2, numero3);

    document.getElementById('operaciones').innerHTML = ` 
     ${mayorr}
     `;

    return false
}



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