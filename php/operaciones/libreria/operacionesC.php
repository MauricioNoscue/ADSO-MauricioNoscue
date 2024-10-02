



<?php

include('operaciones2.php');


$data = json_decode(file_get_contents('php://input'), true);

$num1 = new Numero($data['numero1']);
$num2 = new Numero($data['numero2']);
$operaciones = new Operaciones($num1, $num2);

$response = [];

$response ['suma']= $operaciones->sumar();
$response['resta']= $operaciones->restar();
$response['multiplicacion']= $operaciones->multiplicar();
$response['division']= $operaciones->dividir();


header('Content-Type: application/json');
echo json_encode($response);    