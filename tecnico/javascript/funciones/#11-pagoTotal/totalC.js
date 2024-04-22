
function calcularSalario(pavalorDia, pdiasTrab) {
    let valorDia = pavalorDia;
    let diasTra = pdiasTrab;
    let salario = diasTra * valorDia;
    return   salario;
}


function calcularSalud(psalario) {
    let salarioo = psalario;
    let porcentaje = 0.12;
    let salud = salarioo * porcentaje;
    return salud;
}

function calcularPension(psalario) {
    let salarioo = psalario;
    let porcentaje = 0.16;
    let pension = salarioo * porcentaje;
    return pension;
}

function calcularArl(psalario) {
    let salarioo = psalario;
    let porcentaje = 0.052;
    let arl = salarioo * porcentaje;
    return arl;
}




function trasnportee ( psalario){
    let smm = 1300000;
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

 function retencionn(psalario){
    let smm = 1300000;
    let salario = psalario;
    let retencion;
    if(salario > 4*smm){
        return retencion = salario * 0.04;
    }
        else{
            return retencion = 0;
        }

 }

function calcularDescuento(psalario){
    let salario = psalario
    let salud = calcularSalud(salario)
    let pension = calcularPension(salario)
    let arl = calcularArl(salario)
    let descuento;
    descuento = salud + pension + arl;
    return descuento;
}

function calcularPago(psalario){
    let salario  = psalario;
    let sbtransp = trasnportee(salario)
    let descuento = calcularDescuento(salario)
    let retenc = retencionn(salario)
    let pago;
    pago = (salario + sbtransp) - (descuento + retenc);
    return pago;
   
}






const calcularSalario2 = function(pavalorDia, pdiasTrab) {
    let valorDia = pavalorDia;
    let diasTra = pdiasTrab;
    let salario = diasTra * valorDia;
    return   salario;
}

const calcularSalud2 = function(psalario) {
    let salarioo = psalario;
    let porcentaje = 0.12;
    let salud = salarioo * porcentaje;
    return salud;
}
 
const calcularPension2 = function(psalario) {
    let salarioo = psalario;
    let porcentaje = 0.16;
    let pension = salarioo * porcentaje;
    return pension;
}

const calcularArl2 = function(psalario) {
    let salarioo = psalario;
    let porcentaje = 0.052;
    let arl = salarioo * porcentaje;
    return arl;
}


const trasnportee2 = function ( psalario){
    let smm = 1300000;
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

 const retencionn2 = function(psalario){
    let smm = 1300000;
    let salario = psalario;
    let retencion;
    if(salario > 4*smm){
        return retencion = salario * 0.04;
    }
        else{
            return retencion = 0;
        }

 }

const calcularDescuento2 = function(psalario){
    let salario = psalario
    let salud = calcularSalud(salario)
    let pension = calcularPension(salario)
    let arl = calcularArl(salario)
    let descuento;
    descuento = salud + pension + arl;
    return descuento;
}

const calcularPago2 = function(psalario){
    let salario  = psalario;
    let sbtransp = trasnportee(salario)
    let descuento = calcularDescuento(salario)
    let retenc = retencionn(salario)
    let pago;
    pago = (salario + sbtransp) - (descuento + retenc);
    return pago;
   
}

