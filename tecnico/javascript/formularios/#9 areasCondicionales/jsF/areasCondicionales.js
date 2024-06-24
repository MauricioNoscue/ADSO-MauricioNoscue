/**
 * funcion calcular area de tres cuadrados y mostrar cual es mayor 
 * autor: mauricio noscue 
 * fecha: 24-06-2024
 */

function operaciones(){
    let cuadrado1 = parseFloat(document.getElementById('txtlado1').value);
    let cuadrado2 = parseFloat(document.getElementById('txtlado2').value);
    let cuadrado3 = parseFloat(document.getElementById('txtlado3').value);

    let cuadradoUno = areaCuadrado(cuadrado1);
    let cuadradoDos = areaCuadrado(cuadrado2);
    let cuadradoTres = areaCuadrado(cuadrado3);
    let mayor = areaMayor(cuadradoUno, cuadradoDos, cuadradoTres);
    
    document.getElementById('operaciones').innerHTML =  `
    <strong> Cuadrado 1: </strong> ${cuadradoUno}<br>
    <strong> Cuadrado 2: </strong> ${cuadradoDos}<br>
    <strong> Cuadrado 3 : </strong> ${cuadradoTres}<br>
    <strong> ${mayor} </strong>
    `;
    return false
}



function areaCuadrado  (plado){
    let lado = plado;
    let area;
    area = lado * lado;
    return area;

}

function areaMayor (parea1, parea2, parea3){
    let area1 = parea1;
    let area2 = parea2;
    let area3 = parea3;
    if (area1 == area2 && area1 == area3 && area2 == area3){
        return "Las áreas son iguales"
    }else{
        if(area1 > area2 && area1 > area3){
            return "área uno mayor: "+area1;
        }else{
            if(area2 > area1 && area2 > area3){
                return "área dos mayor: "+area2;
            }else{
                return "área tres mayor: "+area3;
            }
        }
    }

}