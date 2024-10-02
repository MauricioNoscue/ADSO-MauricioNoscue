

 function operaciones(){

    fetch ('libreria/operacionesC.php',{
        method: 'POST',
        headers : {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            numero1:8,
            numero2 :4,
        })

    })

    .then(response => response.json())
    .then(data=>{
        if(data.error){
            alert(data.error)
        }else{
            document.getElementById('suma').textContent = `suma : ${data.suma}`;
            document.getElementById('resta').textContent = `resta : ${data.resta}`;
            document.getElementById('multiplicacion').textContent = ` multiplicacion : ${data.multiplicacion}`;
            document.getElementById('division').textContent = `dividion : ${data.division}`;
            console.log(data)
        }
    })

    .catch(error => console.error('error',error));
 }


 document.addEventListener('DOMContentLoaded', function(){
    console.log('HOLA')
   
    operaciones();

})