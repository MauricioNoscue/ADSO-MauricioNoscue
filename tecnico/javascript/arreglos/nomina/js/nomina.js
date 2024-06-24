/**
 * Nómina de 10 personas 
 * Autor: Mauricio Noscue 
 * 15-mayo-2023
 */


let salud1;
let pension1;
let salario1;
let arl1;
let descuento1;
let retencion1;
let transporte1;
let abonos1;
let totalPagoPersona1;
let pagoNomina = [];
let nomina = [];
nomina = [
    
        {cedula: 1084922863, nombre: "Mauricio", apellido: "Noscue", edad: 17, estrato: 1, valorDia: 50000, diasTrabajados: 30},
        {cedula: 1084792565, nombre: "Sergio", apellido: "Leguizamo", edad: 17, estrato: 2, valorDia: 30000, diasTrabajados: 20},
        {cedula: 1006922769, nombre: "Isabel", apellido: "Tovar", edad: 17, estrato: 2, valorDia: 10000, diasTrabajados: 28},
        {cedula: 1064922767, nombre: "jorge", apellido: "Barón", edad: 17, estrato: 2, valorDia: 3200, diasTrabajados: 30},
        {cedula: 1086922965, nombre: "Daniel", apellido: "Bata", edad: 18, estrato: 6, valorDia: 2555000, diasTrabajados: 30},
        {cedula: 1088926863, nombre: "Aníbal", apellido: "Vargas", edad: 18, estrato: 3, valorDia: 5300000, diasTrabajados: 1},
        {cedula: 1085925862, nombre: "Jesus", apellido: "Fierro", edad: 17, estrato: 2, valorDia: 30000, diasTrabajados: 30},
        {cedula: 1087922961, nombre: "Javier", apellido: "Tovar", edad: 18, estrato: 2, valorDia: 25000, diasTrabajados: 30},
        {cedula: 1004922068, nombre: "Santiago", apellido: "Chaparro", edad: 17, estrato: 3, valorDia: 32000, diasTrabajados: 30},
        {cedula: 1074927860, nombre: "isabella", apellido: "Carrera", edad: 18, estrato: 2, valorDia: 90000, diasTrabajados: 30},


];

let iteracion;
for(iteracion = 0; iteracion< nomina.length; iteracion++){
    salud1 = calSalud(nomina[iteracion].valorDia, nomina[iteracion].diasTrabajados);
    pension1 = calPension(nomina[iteracion].valorDia, nomina[iteracion].diasTrabajados);
    retencion1 = calRetencion(nomina[iteracion].valorDia, nomina[iteracion].diasTrabajados, nomina[iteracion].estrato);
    salario1 = calSalario(nomina[iteracion].valorDia, nomina[iteracion].diasTrabajados);
    transporte1 = calSubTransporte(nomina[iteracion].valorDia, nomina[iteracion].diasTrabajados);
    totalPagoPersona1 = calPagoTotal(nomina[iteracion].valorDia, nomina[iteracion].diasTrabajados);
    arl1 = calArl (nomina[iteracion].valorDia, nomina[iteracion].diasTrabajados);
    descuento1 = calDescuento(nomina[iteracion].valorDia, nomina[iteracion].diasTrabajados)

    abonos1 = calcularAbono(nomina[iteracion].valorDia, nomina[iteracion].diasTrabajados, nomina[iteracion].estrato)
    pagoNomina.push({
        cedula: nomina[iteracion].cedula,
        nombre: nomina[iteracion].nombre,
        apellido: nomina[iteracion].apellido,
        edad: nomina[iteracion].edad,
        estrato: nomina[iteracion].estrato,
        valorDia: nomina[iteracion].valorDia,
        diasTrabajados: nomina[iteracion].diasTrabajados,
        salario: salario1,  
        salud: salud1,
        pension: pension1,
        arl : arl1,
        descuentos: descuento1,
        Abonos: abonos1,
        retencion: retencion1,
        transporte: transporte1,
        totalPagoPersona: totalPagoPersona1

    })


}
console.log(pagoNomina)







function calcularAbono(pvDia, pdTra, estrato){
    let abono = 0;
    if((calSalario(pvDia,pdTra)<=1300000) && (estrato == 1 || estrato==2)){
        abono = 100000;
    }else{
        abono = 0;
    }
    
    return abono 
}

function calSalario(pvDia,pdTra){
    let salario;
    let vDia = pvDia;
    let dTra = pdTra;
    salario = vDia*dTra;   
    return salario;

}

function calSalud(pvDia,pdTra){
    let salud = calSalario(pvDia,pdTra)*0.12;
    return salud;

}

function calPension(pvDia,pdTra){
    let pension = calSalario(pvDia,pdTra)*0.16;
    return pension;

}

function calArl(pvDia,pdTra){
    let arl = calSalario(pvDia,pdTra)*0.052;
    return arl;
}

function calDescuento(pvDia,pdTra){
    let salud= calSalud(pvDia,pdTra);
    let pension= calPension(pvDia,pdTra);
    let arl = calArl(pvDia,pdTra);
    let descuento;
    descuento = salud+pension+arl;
    return descuento;
}

function calSubTransporte(pvDia,pdTra){
    let subTransporte = 0;
    if(calSalario(pvDia,pdTra)<(2*1300000)){
        subTransporte = subTransporte+114000;
    }else{
        subTransporte = 0;
    }
    return subTransporte;
}

// queda pendiente el estrato 
function calRetencion(pvDia,pdTra, estrato){
    let retencion= 0;
    if(calSalario(pvDia,pdTra)>(4*1300000)){
        retencion=calSalario(pvDia,pdTra)*0.03;
    }else{
        if(calSalario(pvDia,pdTra)>(6*1300000)){
            retencion=calSalario(pvDia,pdTra)*0.04;
        }else{
            if(calSalario(pvDia,pdTra)>(8*1300000) && estrato==6 ){
                retencion=calSalario(pvDia,pdTra)*0.05;
            }
        }
    }
    return retencion;

}

function calPagoTotal(pvDia,pdTra){
    let salario= calSalario(pvDia,pdTra);
    let subTransporte= calSubTransporte(pvDia,pdTra);
    let descuento= calDescuento(pvDia,pdTra);
    let retencion= calRetencion(pvDia,pdTra);
    let pagoTotal;
    pagoTotal = (salario+subTransporte)-(descuento+retencion);
    return pagoTotal;
}