function realizarTodasOperaciones(){
    fetch ('libreria/resultado.php',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            numero1:24,
            numero2: 5
        })

    })
    .then(response => response.json())
    .then(data =>{
        if (data.error) {
            alert(data.error)
        } else {
            document.getElementById('resulCuadrado').textContent = `cuadrado área : ${data.cuadrado}`;
            document.getElementById('resulTriangulo').textContent = `triangulo : ${data.triangulo}`;
            document.getElementById('resulRectangulo').textContent = `rectanfulo : ${data.rectangulo}`;

            console.log(data)
        }
    })
    .catch(error => console.error('error',error));
}

document.addEventListener('DOMContentLoaded', function(){
    console.log('HOLA')
   
    realizarTodasOperaciones();

})