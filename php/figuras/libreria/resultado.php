<?php

include('fg.php');
$data = json_decode(file_get_contents('php://input'), true);


$base = new valor($data['numero1']);
$altura = new valor($data['numero2']);

$figuras = new figuras($base, $altura);
 

$response = [];
$response['cuadrado'] = $figuras->cuadrado ();
$response['triangulo'] = $figuras->triangulo ();
$response['rectangulo'] = $figuras->rectangulo ();


header('Content-Type: application/json');
echo json_encode($response);
