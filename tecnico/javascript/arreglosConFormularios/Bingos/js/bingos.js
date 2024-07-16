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
    }
   

    // Primera tabla de bingo simple
    imprimir += '<table class="table" style="border: 1px solid #000; width: 300px; margin: 5px;">';

    imprimir += '<tr>';
    for (let letra of letras) {
        imprimir += '<th>' + letra + '</th>';
    }
    imprimir += '</tr>';

    for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
        imprimir += '<tr>';
        for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
            imprimir += '<td>' + bingo[iteracion1][iteracion2] + '</td>';
        }
        imprimir += '</tr>';
    }

    imprimir += '</table>';

    // letras 
    for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
        imprimir += '<table class="table" style ="border: 1px solid#000; width:300px; margin:5px;">';
        imprimir += '<tr>';
    
        for (let contadorB = 0; contadorB < letras.length; contadorB++) {
            imprimir += '<th>' + letras[contadorB] + '</th>';
        }
    
        imprimir += '</tr>';
    
        for (let contador = 0; contador < 5; contador++) {
            imprimir += '<tr>';
            for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
                if (iteracion2 == iteracion1) {
                    imprimir += '<td style=" background-color: rgb(255, 142, 127);"><strong>' + bingo[contador][iteracion2] + '</strong></td>';
                } else {
                    imprimir += '<td>' + bingo[contador][iteracion2] + '</td>';
                };
            };
            imprimir += '</tr>';
        };
    
        imprimir += '</table>';
    };
    
    // Tercera tabla de bingo con la X grande
    
    imprimir += '<table class="table" style ="border: 1px solid#000; width:300px; margin:5px;">'
    imprimir += '<tr>';
    
    for (let contadorB = 0; contadorB < letras.length; contadorB++) {
        imprimir += '<th>' + letras[contadorB] + '</th>';
    }

    imprimir += '</tr>';
    for(iteracion1 =0; iteracion1 <5; iteracion1++){
         
        imprimir += '<tr>';
        for(iteracion2 = 0; iteracion2 < 5; iteracion2++){

            if(iteracion2 == iteracion1 ){
                imprimir += '<td>'+'<strong>'+bingo[iteracion1][iteracion2]+'</strong>'+'</td>'
            }else if(iteracion2 == 5-(iteracion1+1)){
                imprimir += '<td>'+'<strong>'+bingo[iteracion1][iteracion2]+'</strong>'+'</td>'
            }
            else{
                imprimir += '<td>'+bingo[iteracion1][iteracion2]+'</td>';
            }
        };
        imprimir += '</tr>';
    };
    imprimir += '</table>';






    document.getElementById('bingo').innerHTML = imprimir;
});
