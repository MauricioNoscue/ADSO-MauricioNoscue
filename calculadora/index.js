// LLAMANDO VARIABLES 
const top1 = document.getElementById('op1');
const toperacion = document.getElementById('operacion');
const top2 = document.getElementById('op2');
const botoncalcular = document.getElementById('calcular');
const presultado = document.getElementById("resultado");
// PONIENDO A FUNCIONAR EL BOTON 
botoncalcular.addEventListener('click', calcular );



// EJECUTANDO LA FUNCION PARA QUE AL MOMENTO DE ELEGIR UN OPERADOR NO PONGAN UN VALOR NULO 
function calcular(){    
    const operacion = toperacion.value
    const op1 = parseFloat(top1.value)
    const op2 =  parseFloat(top2.value)
    if((operacion == "+" || operacion == "*" || operacion =="-"|| operacion=="/") && !isNaN(op1)&&!isNaN(op2))
    {
        // switch funciona como un si, "si operacion entonces" el "case" tambien actua como si 
        let resultado;
        switch(operacion){
            case "+":
                resultado = op1 + op2
                break
            case "-":   
                resultado = op1 - op2
                break
            case "*":   
                resultado = op1 * op2
                break
            case  "/":      
                resultado = op1 / op2 
                break 
        }
       presultado.innerText = "=" +resultado  
   } else{
    presultado.innerText="operador invalido "
    }

}
    