/**
 * Generación de tablas de bingo en HTML
 * Autor: Mauricio Noscue
 * Fecha: 13/07/2024
 */
document.addEventListener('DOMContentLoaded', function() {
 
    let bingo = [];
    let letras = ['B', 'I', 'N', 'G', 'O'];
    let iteracion1;
    let iteracion2;
    let contadorB = 0;
    let contador = 0;
    let imprimir = '';

    for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
        let interno = [];
        for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
            contador = contador + 1;
            let tabla = contador * 3;
            interno.push(tabla);
        }
        bingo.push(interno);
    };
    // Primera tabla de bingo simple
    for(iteracion1 =0; iteracion1<1; iteracion1++){
        imprimir += '<table class="table">';

    imprimir += '<tr>';
     for(contadorB = 0; contadorB< letras.length; contadorB++){
        imprimir += '<th class = "cabeza">'+ letras[contadorB]+'</th>'
    }
    imprimir += '</tr>';

    for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
        imprimir += '<tr>';
        for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
            imprimir += '<td class = "borde">' + bingo[iteracion1][iteracion2] + '</td>';
        }
        imprimir += '</tr>';
    };

    imprimir += '</table>';
    };
    // letras 
    for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
        imprimir += '<table class="table">';
        imprimir += '<tr>';
    
        for ( contadorB = 0; contadorB < letras.length; contadorB++) {
            imprimir += '<th class = "cabeza">' + letras[contadorB] + '</th>';
        };
        imprimir += '</tr>';
        for ( contador = 0; contador < 5; contador++) {
            imprimir += '<tr>';
            for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
                if (iteracion2 == iteracion1) {
                    imprimir += '<td class = "seleccion borde";">' + bingo[contador][iteracion2] + '</td>';
                } else {
                    imprimir += '<td class = "borde">' + bingo[contador][iteracion2] + '</td>';
                };
            };
            imprimir += '</tr>';
        };
    
        imprimir += '</table>';
    };
    // Tercera tabla de bingo con la X grande
    for(iteracion1 =0; iteracion1<1; iteracion1++){
        imprimir += '<table class="table">'
    imprimir += '<tr>';
    for ( contadorB = 0; contadorB < letras.length; contadorB++) {
        imprimir += '<th class = "cabeza">' + letras[contadorB] + '</th>';
    };
    imprimir += '</tr>';
    for(iteracion1 =0; iteracion1 <5; iteracion1++){    
        imprimir += '<tr>';
        for(iteracion2 = 0; iteracion2 < 5; iteracion2++){
            if(iteracion2 == iteracion1 ){
                imprimir += '<td class = "seleccion borde">'+bingo[iteracion1][iteracion2]+'</td>'
            }else if(iteracion2 == 5-(iteracion1+1)){
                imprimir += '<td  class = "seleccion borde">'+bingo[iteracion1][iteracion2]+'</td>'
            }
            else{
                imprimir += '<td class = "borde">'+bingo[iteracion1][iteracion2]+'</td>';
            };
        };
        imprimir += '</tr>';
    };
    imprimir += '</table>';
    };




    for(iteracion1 = 0; iteracion1 <1; iteracion1++){
        imprimir += '<table class= "table">';
        imprimir += '<tr>'
        for(contadorB =0; contadorB<letras.length; contadorB++){
            imprimir += '<th class = "cabeza">'+letras[contadorB]+'</th>'
        }
        imprimir += '</tr>';
        
        
    };


    document.getElementById('bingo').innerHTML = imprimir;
});
