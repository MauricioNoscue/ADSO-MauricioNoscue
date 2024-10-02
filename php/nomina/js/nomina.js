function nomina(){
    fetch ('libreria/nominaCC.php',{

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            diasTrabajados:24,
            valorDia: 5
        })

    })
    .then(response => response.json())
    .then(data =>{
        if (data.error) {
            alert(data.error)
        } else {
            document.getElementById('salario').textContent = `salario: ${data.salario}`;
            document.getElementById('salud').textContent = `salud : ${data.salud}`;
            document.getElementById('pension').textContent = `pension : ${data.pension}`;
            document.getElementById('arl').textContent = `arl : ${data.arl}`;
            document.getElementById('transporte').textContent = `transporte : ${data.transporte}`;
            document.getElementById('retencion').textContent = `retencion : ${data.retencion}`;
            document.getElementById('descuento').textContent = `descuento : ${data.descuento}`;
            document.getElementById('pagoTotal').textContent = `pagoTotal : ${data.pagoTotal}`;


            console.log(data)
        }
    })
    .catch(error => console.error('error',error));
}

document.addEventListener('DOMContentLoaded', function(){
    console.log('HOLA')
   
    nomina();

})