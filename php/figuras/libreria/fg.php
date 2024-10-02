<?php
class valor {
    private $valor;
    public function __construct($valor) {
        $this->valor = $valor;
    }
    public function setValor() {
        $this->valor; 
    }
    public function getValor() {
        return $this->valor;
    }
}
class figuras {
    private $altura;
    private $base;
    public $cuadrado;
    public $triangulo;
    public $rectangulo;
    public function __construct( valor $base,  valor $altura){
        $this->base = $base->getValor();
        $this->altura = $altura->getValor();
    }
    public function cuadrado(){
        $this-> cuadrado = $this->base *  $this->base;
        return $this->cuadrado;
    }
    public function triangulo(){
        $this-> triangulo = ($this->base *  $this->altura) /2;
        return $this->triangulo;
    }
    public function rectangulo(){
        $this-> rectangulo = $this->base *  $this->altura;
        return $this->rectangulo;
    }
}
