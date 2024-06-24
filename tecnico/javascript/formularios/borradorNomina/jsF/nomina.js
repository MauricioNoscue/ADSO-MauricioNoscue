/**
 * funcion nomina
 * autor: mauricio noscue 
 * fecha: 22-06-2024
 */
    

function operaciones(){
    let cedula = parseInt(document.getElementById('txtcedula').value);
    let nombre =  document.getElementById('txtnombres').value;
    let apellido = document.getElementById('txtapellidos').value
    let edad = parseInt(document.getElementById('txtedad').value);
    let estrato = parseInt(document.getElementById('txtestrato').value);
    let valorDia = parseFloat(document.getElementById('txtvalordia').value);
    let diasTrabajados = parseFloat(document.getElementById('txtdiastra').value);

    let salario = calSalario(valorDia, diasTrabajados);
    let salud = calSalud(valorDia, diasTrabajados);
    let pension = calPension(valorDia, diasTrabajados);
    let arl = calArl(valorDia, diasTrabajados);
    let descuentos = calDescuento(valorDia, diasTrabajados);
    let abonos = calcularAbono(valorDia, diasTrabajados, estrato);
    let retencion = calRetencion(valorDia, diasTrabajados, estrato);
    let transporte = calSubTransporte(valorDia, diasTrabajados);
    let totalPagoPersona = calPagoTotal(valorDia, diasTrabajados);

    document.getElementById('nomina').innerHTML = `
        <strong>Cédula:</strong> ${cedula}<br>
        <strong>Nombre:</strong> ${nombre}<br>
        <strong>Apellido:</strong> ${apellido}<br>
        <strong>Edad:</strong> ${edad}<br>
        <strong>Estrato:</strong> ${estrato}<br>
        <strong>Valor por Día:</strong> ${valorDia}<br>
        <strong>Días Trabajados:</strong> ${diasTrabajados}<br>
        <strong>Salario:</strong> ${salario}<br>
        <strong>Salud:</strong> ${salud}<br>
        <strong>Pensión:</strong> ${pension}<br>
        <strong>ARL:</strong> ${arl}<br>
        <strong>Descuentos:</strong> ${descuentos}<br>
        <strong>Abonos:</strong> ${abonos}<br>
        <strong>Retención:</strong> ${retencion}<br>
        <strong>Transporte:</strong> ${transporte}<br>
        <strong>Total a Pagar:</strong> ${totalPagoPersona}<br> 
        
    `;

    let nuevoRegistro = document.createElement('li');
    nuevoRegistro.innerHTML = `
        <strong>Cédula:</strong> ${cedula}, 
        <strong>Nombre:</strong> ${nombre} ${apellido}, 
        <strong>Edad:</strong> ${edad}, 
        <strong>Estrato:</strong> ${estrato}, 
        <strong>Salario:</strong> ${salario}
       
    `;

    
    document.getElementById('registros').appendChild(nuevoRegistro);
    return false
}

function calSalario(pvDia, pdTra) {
    let salario;
    let vDia = pvDia;
    let dTra = pdTra;
    salario = vDia * dTra;
    return salario;
}
function calSalud(pvDia, pdTra) {
    let salud = calSalario(pvDia, pdTra) * 0.12;
    return salud;
}
function calPension(pvDia, pdTra) {
    let pension = calSalario(pvDia, pdTra) * 0.16;
    return pension;
}
function calArl(pvDia, pdTra) {
    let arl = calSalario(pvDia, pdTra) * 0.052;
    return arl;
}
function calDescuento(pvDia, pdTra) {
    let descuentos = calSalud(pvDia, pdTra) + calPension(pvDia, pdTra) + calArl(pvDia, pdTra);
    return descuentos;
}
function calSubTransporte(pvDia, pdTra) {
    let subTransporte = 0;
    if (calSalario(pvDia, pdTra) < 2 * 1300000) {
        subTransporte += 114000;
    }
    return subTransporte;
}
function calRetencion(pvDia, pdTra, estrato) {
    let retencion = 0;
    if (calSalario(pvDia, pdTra) > 8 * 1300000 && estrato == 6) {
        retencion = calSalario(pvDia, pdTra) * 0.05;
    } else if (calSalario(pvDia, pdTra) > 6 * 1300000) {
        retencion = calSalario(pvDia, pdTra) * 0.04;
    } else if (calSalario(pvDia, pdTra) > 4 * 1300000) {
        retencion = calSalario(pvDia, pdTra) * 0.03;
    }
    return retencion;
}
function calPagoTotal(pvDia, pdTra) {
    let pagoTotal = calSalario(pvDia, pdTra) + calSubTransporte(pvDia, pdTra) - calDescuento(pvDia, pdTra) - calRetencion(pvDia, pdTra);
    return pagoTotal;
}
function calcularAbono(pvDia, pdTra, estrato) {
    let abono = 0;
    if (calSalario(pvDia, pdTra) <= 1300000 && (estrato == 1 || estrato == 2)) {
        abono = 100000;
    }
    return abono;
}




