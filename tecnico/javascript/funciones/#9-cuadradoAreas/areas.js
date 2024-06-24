

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
  
/**
 * constante 
 */



const areaCuadrado2 = function(plado){
    let lado = plado;
    let area;
    area = lado * lado;
    return area;

}

const areaMayor2= function(parea1, parea2, parea3){
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

