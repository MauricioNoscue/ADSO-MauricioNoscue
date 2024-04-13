
function calcularSalario(pavalorDia, pdiasTrab) {
    let valorDia = pavalorDia;
    let diasTra = pdiasTrab;
    let salario = diasTra * valorDia;
    return   salario;
}


function calcularSalud(psalario, pporcentaje1) {
    let salarioo = psalario;
    let porcentaje = pporcentaje1;
    let salud = salarioo * porcentaje;
    return salud;
}

function calcularPension(psalario, pporcentaje2) {
    let salarioo = psalario;
    let porcentaje = pporcentaje2;
    let pension = salarioo * porcentaje;
    return pension;
}

function calcularArl(psalario, pporcentaje3) {
    let salarioo = psalario;
    let porcentaje = pporcentaje3;
    let arl = salarioo * porcentaje;
    return arl;
}


function trasnportee ( psalario,psmm){
    let smm = psmm;
    let salario = psalario;
    let sbtransp;

    if(salario < 2*smm){
        sbtransp = 114000;
        return sbtransp;
    }else{
        sbtransp = 0;
        return sbtransp;
    }
}

 function retencionn(psalario,psmm){
    let smm = psmm;
    let salario = psalario;
    let retencion;
    if(salario > 4*smm){
        return retencion = salario * 0.04;
    }
        else{
            return retencion = 0;
        }

 }

function calcularDescuento(psalud, ppension,parl){
    let salud = psalud;
    let pension = ppension;
    let arl = parl;
    let descuento;
    descuento = salud + pension + arl;
    return descuento;
}

function calcularPago(psalario,psbtransp,pdescuento,pretenc){
    let salario  = psalario;
    let sbtransp = psbtransp;
    let descuento = pdescuento;
    let retenc = pretenc;
    let pago;
    pago = (salario + sbtransp) - (descuento + retenc);
    return pago;
   
}