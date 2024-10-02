<?php

include('nominaC.php');


$data = json_decode(file_get_contents('php://input'), true);


$dias = new Numero($data['diasTrabajados']);
$valorD = new Numero($data['valorDia']);

$nominaa = new nomina($dias,$valorD);


$response =[];

$response['salario'] =$nominaa->calcularSalario();
$response['salud'] = $nominaa->salud();
$response['pension'] = $nominaa->pension();
$response['arl'] = $nominaa->arl();
$response['transporte'] = $nominaa->transporte();
$response['retencion'] = $nominaa->retencion();
$response['descuento'] = $nominaa->descuento();
$response['pagoTotal'] = $nominaa->pagoTotal();


header('Content-Type: application/json');
echo json_encode($response); 
    
 


    
  
    
    
   
