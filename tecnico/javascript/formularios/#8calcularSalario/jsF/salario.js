/**
 * funcion calcular salario 
 * autor: mauricio noscue 
 * fecha: 24-06-2024
 */

function operaciones(){
    let valorDiaa = parseFloat(document.getElementById('txtvalorDia').value);
    let diasTrabajados = parseFloat(document.getElementById('txtDiastra').value);

    let salario = calcularSalario(valorDiaa, diasTrabajados);
    let saludd = calcularSalud(salario);
    let pensionn = calcularPension(salario);
    let arll = calcularArl(salario);
    let descuentoo = calcularDescuento(saludd, pensionn, arll);
    let pagoTotal = calcularPago( salario, descuentoo);
    
    document.getElementById('operaciones').innerHTML =  `
    <strong> Salario: </strong> ${salario}<br>
    <strong> Salud: </strong> ${saludd}<br>
    <strong> Pension : </strong> ${pensionn}<br>
    <strong> Arl : </strong> ${arll}<br>
    <strong> Descuento : </strong> ${descuentoo}<br>
    <strong> Pago total : </strong> ${pagoTotal}<br>
    `;
    return false
}

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

function calcularDescuento(psalud, ppension,parl){
    let salud = psalud;
    let pension = ppension;
    let arl = parl;
    let descuento;
    descuento = salud + pension + arl;
    return descuento;
}

function calcularPago(psalario,pdescuento){
    let salario  = psalario;
    let descuento = pdescuento;
    let pago;
    pago = salario - descuento;
    return pago;
}