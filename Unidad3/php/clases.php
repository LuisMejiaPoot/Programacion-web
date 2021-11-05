<?php


class Coche 
{
    public $color;
    public $modelo;
    public $anio;
    const  RUEDAS = 4;
    public static $duenio = "Carlos";


    public function getDuenio()
    {
        return self::$duenio;
    }
    public function setColor($color)
    {
        $this->color = $color;
    }

    public function getColor()
    {
        return $this->color;
    }

    public function setAnio($anio)
    {
       if (!is_numeric($anio)) {
           throw new Exception("Año de modelo invalido", $anio);
           
       }
       $this->anio = $anio;
    }

    public function getAnio()
    {
        return $this->anio;
    }

}

$micoche =  new Coche();
// $micoche->color="rojo";
$micoche->potencia=120;
$micoche->anio=2010;


$micoche->setColor("Amarrillo");
echo $micoche->getColor();

$micoche->setAnio(1500);
echo $micoche->getAnio();

echo $micoche::RUEDAS;
?>