<?php

class Numero {
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
class nomina{
    public $diasTrabajados;
    public $valorDia;
    public $salario;
    public $salud;
    public $pension;
    public $arl;
    public $transporte;
    public $retencion;
    public $descuento;
    public $pagoTotal;


    public function __construct(Numero $diasTrabajados, Numero $valorDia){
        $this->diasTrabajados =$diasTrabajados->getValor();
        $this->valorDia = $valorDia->getValor();

    }



    public function calcularSalario(){
        $this->salario = $this->diasTrabajados * $this->valorDia;
        return $this->salario;
    }
    public function salud(){
        $this->salud = $this->salario *0.12;
        return $this->salud;
    }
    public function pension(){
        $this->pension = $this->salario * 0.16;
        return $this->pension;
    }
    public function arl(){
        $this->arl = $this->salario * 0.052;
        return $this->arl;
    }
    public function transporte(){
        $smm = 1300000;
        $this->transporte = ($this->salario<2*$smm) ? 114000: 0 ;
        return $this->transporte;
    }
    public function retencion(){
        $smm = 1300000;
        $this->retencion = ($this->salario >4*$smm) ? $this->salario * 0.04 : 0 ;
        return $this->retencion;
    }
    public function descuento(){
        $this->descuento = $this->salud + $this->pension +$this->arl;
        return $this->descuento;
    }
    public function pagoTotal(){
        $this->pagoTotal = ($this->salario + $this->transporte) - ($this->descuento + $this->retencion);
        return $this->pagoTotal;
    }
}



