
<?php
    include "connections.php";

    $obj = new connections();

    $formulario =  $_POST["formulario"];
    $form = [];
    parse_str($formulario,$form);

    $nombre  =  $form["nombre"];
    $correo =  $form["correo"];
    $id =  $form["id"];

    $sql  =  "update users set name = '".$nombre."', email =  '".$correo."' where id =  ".$id." ";

    $response = [];
    try {
        $obj->connections_link->query($sql);
        $response["status"] = "success";
        $response["message"] ="Usuario actualizado";
    } catch (\Throwable $th) {
        $response["status"] = "error";
        $response["message"] ="intebte mas tarde";
    }

    echo json_encode($response);




 ?>