/**
 * Generación de tablas de bingo en HTML
 * Autor: Mauricio Noscue
 * Fecha: 13/07/2024
 */
document.addEventListener('DOMContentLoaded', function() {
    let bingo = [];
    let interno =[];
    let letras = ['B', 'I', 'N', 'G', 'O'];
    let iteracion1;
    let iteracion2;
    let iteracionTabla;
    let contadorB = 0;
    let contador = 0;
    let tabla;
    let imprimir = '';
    

    for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
        interno = [];
        for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
            contador = contador + 1;
            tabla = contador * 3;
            interno.push(tabla);
        }
        bingo.push(interno);
    };

    // Primera tabla de bingo simple
    for (iteracionTabla = 0; iteracionTabla < 1; iteracionTabla++) {
        imprimir += '<table class="table">';
        imprimir += '<tr>';
        for (contadorB = 0; contadorB < letras.length; contadorB++) {
            imprimir += '<th class="cabeza">' + letras[contadorB] + '</th>';
        }
        imprimir += '</tr>';
        for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
            imprimir += '<tr>';
            for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
                imprimir += '<td class="borde">' + bingo[iteracion1][iteracion2] + '</td>';
            }
            imprimir += '</tr>';
        }
        imprimir += '</table>';
    }

    // letras
    for (iteracionTabla = 0; iteracionTabla < 5; iteracionTabla++) {
        imprimir += '<table class="table">';
        imprimir += '<tr>';
        for (contadorB = 0; contadorB < letras.length; contadorB++) {
            imprimir += '<th class="cabeza">' + letras[contadorB] + '</th>';
        }
        imprimir += '</tr>';
        for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
            imprimir += '<tr>';
            for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
                if (iteracion2 == iteracionTabla) {
                    imprimir += '<td class="seleccion ">' + bingo[iteracion1][iteracion2] + '</td>';
                } else {
                    imprimir += '<td class="borde">' + bingo[iteracion1][iteracion2] + '</td>';
                }
            }
            imprimir += '</tr>';
        }
        imprimir += '</table>';
    }

    // Tercera tabla de bingo con la X grande
    for (iteracionTabla = 0; iteracionTabla < 1; iteracionTabla++) {
        imprimir += '<table class="table">';
        imprimir += '<tr>';
        for (contadorB = 0; contadorB < letras.length; contadorB++) {
            imprimir += '<th class="cabeza">' + letras[contadorB] + '</th>';
        }
        imprimir += '</tr>';
        for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
            imprimir += '<tr>';
            for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
                if (iteracion1 == iteracion2) {
                    imprimir += '<td class="seleccion">' + bingo[iteracion1][iteracion2] + '</td>';
                } else if (iteracion2 == 4 -(iteracion1)) {
                    imprimir += '<td class="seleccion">' + bingo[iteracion1][iteracion2] + '</td>';
                } else {
                    imprimir += '<td class="borde">' + bingo[iteracion1][iteracion2] + '</td>';
                }
            }
            imprimir += '</tr>';
        }
        imprimir += '</table>';
    }
    // bingo con tres x
    for (iteracionTabla = 0; iteracionTabla < 1; iteracionTabla++) {
        imprimir += '<table class="table">';
        imprimir += '<tr>';
        for (contadorB = 0; contadorB < letras.length; contadorB++) {
            imprimir += '<th class="cabeza">' + letras[contadorB] + '</th>';
        }
        imprimir += '</tr>';
        for(iteracion1 = 0; iteracion1 <5; iteracion1++){
            imprimir += '<tr>';
            for(iteracion2 = 0; iteracion2 <5; iteracion2++){
                // primera x
                if(iteracion1 >= 0 && iteracion1 == iteracion2 -1 && iteracion1 <=2){
                    imprimir += '<td class="seleccion">' + bingo[iteracion1][iteracion2]+'</td>'
                }else if( iteracion1 == 3-(iteracion2) && iteracion1 <=2){
                    imprimir += '<td class="seleccion">' + bingo[iteracion1][iteracion2]+'</td>'
                 // segunda x   
                }else if( iteracion1 == iteracion2+2){
                    imprimir += '<td class=" seleccion2">' + bingo[iteracion1][iteracion2]+'</td>'
                }else if( iteracion1 >= 2 && iteracion1 == 4-(iteracion2)){
                    imprimir += '<td class=" seleccion2">' + bingo[iteracion1][iteracion2]+'</td>'
                //tercera x
                } else if(  iteracion1 >=2 && iteracion2 == iteracion1 ){
                    imprimir += '<td class="seleccion3">' + bingo[iteracion1][iteracion2]+'</td>'
                }else if(iteracion2 >= 2 && iteracion1 == 6-(iteracion2)){
                    imprimir += '<td class="seleccion3">' + bingo[iteracion1][iteracion2]+'</td>'
                }else{
                    // resto de la tabla 
                    imprimir += '<td class="borde">' + bingo[iteracion1][iteracion2]+'</td>'
                }
            }
            imprimir += '</tr>';
        }
        imprimir += '</table>';
    }



    for(iteracionTabla = 0; iteracionTabla <1; iteracionTabla++){
        imprimir += '<table class="table">';
        imprimir+= '<tr>'
        for( contadorB =0; contadorB < letras.length; contadorB++){
            imprimir += '<th class="cabeza">' +letras[contadorB]+'</th>';   
        }
        imprimir += '</tr>'
        for(iteracion1 = 0; iteracion1 <5; iteracion1++){
            imprimir+= '<tr>';
            for(iteracion2 = 0; iteracion2 <5; iteracion2++){
                if(iteracion1 >= 0 && iteracion1 == iteracion2 -1 && iteracion1 <=2){
                    imprimir += '<td class ="seleccion">'+bingo[iteracion1][iteracion2]+'</td>'
                }else if (iteracion1 == 3-(iteracion2) && iteracion1 <=2){
                    imprimir += '<td class = "seleccion">'+ bingo[iteracion1][iteracion2]+'</td>'
                }else{
                    imprimir += '<td class = "borde">'+ bingo[iteracion1][iteracion2]+'</td>'
                }
            }
            imprimir+= '</tr>'
        }
        imprimir += '</table>'
    }
    document.getElementById('bingo').innerHTML = imprimir;
});