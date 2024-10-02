                                            /**
 * funcion calcular salario co condicinales 
 * autor: mauricio noscue 
 * fecha: 26-06-2024
 */

function operaciones(){
    let valorDiaa = parseInt(document.getElementById('txtvalorDia').value);
    let diasTrabajados = parseInt(document.getElementById('txtDiastra').value);

    let salario = calcularSalario(valorDiaa, diasTrabajados);
    let saludd = calcularSalud(salario);
    let pensionn = calcularPension(salario);
    let arll = calcularArl(salario);
    let trasnporte = trasnportee(salario);
    let retencion = retencionn(salario)
    let descuentoo = calcularDescuento(salario);
    let pagoTotal = calcularPago( salario);
    
    document.getElementById('operaciones').innerHTML =  `
    <strong> Salario: </strong> ${salario}<br>
    <strong> Salud: </strong> ${saludd}<br>
    <strong> Pension : </strong> ${pensionn}<br>
    <strong> Arl : </strong> ${arll}<br>
    <strong> Trasporte : </strong> ${trasnporte}<br>
    <strong> Retencion : </strong> ${retencion}<br>
    <strong> Descuento : </strong> ${descuentoo}<br>
    <strong> Pago total : </strong> ${pagoTotal}<br>
    `;
    return false
};


function calcularSalario(pavalorDia, pdiasTrab) {
    let valorDia = pavalorDia;
    let diasTra = pdiasTrab;
    let salario = diasTra * valorDia;
    return   salario;
};


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