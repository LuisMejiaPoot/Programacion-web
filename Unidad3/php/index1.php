<?php 

$cadena ="Luis Angel";
$numero  = 10;
$verdadero = true;
$false =  false;
$arreglo  = array(1,2,3,5,6);
$arreglo2 =  ["manuel","carlos","mauricio","Jose"];
$asociativo  = ["key1"=>"manuel","key2"=>"carlos","key3"=>"mauricio","key4"=>1500];
define("COMIDA", "hotdog");

// echo sumar(40,60);

$objeto  =  new miClase();

$resta  =  $objeto->restar(78,8);
echo $resta;


class miClase 
{
    public function restar($num1, $num2)
    {
        $resta =  $num1  -  $num2;
        return $resta;
    }
}


function sumar($num1 , $num2)
{
    $suma  =  $num1 + $num2;
    return "El resultado es: ".$suma;
}

$cont = 0;
while ($cont < count($arreglo2)) {

    $nombre  =  $arreglo2[$cont];

    switch ($nombre) {
        case 'manuel':
            echo "<h1>".$nombre."</h1>";
            break;
        
        case "mauricio":
            echo "<h1> Soy mauricio</h1>";
        default:
            # code...
            break;
    }
    $cont++;

}



// print_r($asociativo);

// for ($i=0; $i <count($arreglo) ; $i++) { 
    

//     if ($arreglo[$i] >= 5) {
//         echo "<h1>".$arreglo[$i]."</h1>";
//     }
//     elseif ($arreglo[$i] == 1) {
//         echo "<h1> Soy un UNO</h1>";
//     }
//     else{
//         echo "<h1> No cumple la condicion </h1>";
//     }
   
// }



// echo $asociativo["key1"];
// foreach ($asociativo as $key => $item) {
//     echo "<h1>".$asociativo[$key]."</h1>";
// }

// $variable  = ($numero > 150) ?  "Si": "No";

?>