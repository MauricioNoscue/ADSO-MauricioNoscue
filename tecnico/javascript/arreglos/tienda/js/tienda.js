
/**
 * tienda
 * maurico noscue 
 * tipo de arreglo con valores 
 */
let iteracion;
let tienda = [];
tienda = [
{id:1, nombreProducto: 'lentejas', tipoProducto: 'gramos', cantidad:1000, tipoCantidad: 'gramos', precio: 2300},
{id:2, nombreProducto: 'frijol', tipoProducto: 'gramos', cantidad:500, tipoCantidad: 'gramos', precio: 2300},
{id:3, nombreProducto: 'pollo entreo', tipoProducto: 'carnes', cantidad:1000, tipoCantidad: 'carnes', precio: 2300},
{id:4, nombreProducto: 'carne de cerdo', tipoProducto: 'carnes', cantidad:500, tipoCantidad: 'carnes', precio: 2300},
{id:5, nombreProducto: 'mora', tipoProducto: 'frutas', cantidad:500, tipoCantidad: 'frutas', precio: 2300},
{id:6, nombreProducto: 'uva', tipoProducto: 'frutas', cantidad:1000, tipoCantidad: 'frutas', precio: 2300},
{id:7, nombreProducto: 'tomate ', tipoProducto: 'verduras', cantidad:500, tipoCantidad: 'verduras', precio: 2300}
]
console.log(tienda)


for(iteracion = 0; iteracion<7; iteracion++){
    if(tienda[iteracion].cantidad<= 500 && tienda[iteracion].tipoProducto == 'gramos'){

        console.log("posición: "+ iteracion+":");
        console.log(tienda[iteracion])
    }else{
        console.log("-----")
    }

}