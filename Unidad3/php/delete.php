<?php
    include "connection.php";
    $obj =  new connection();
    $conn = $obj->connection_db();

    $id_user = $_POST["id"];

    $sql =  "DELETE FROM users where id=".$id_user;

    $delete = false;

    $response=[];
    try {
        $conn->query($sql);
        $delete = true;
        $response["status"] = "success";
        $response["message"] = "Usuario eliminado";
    } catch (\Throwable $th) {
        $delete = false;
        $response["status"] = "error";
        $response["message"] = "Error: intente mas tarde";

    }

    echo json_encode($response);
    



?>