<?php
    include "connection.php";
    $obj =  new connection();
    $conn = $obj->connection_db();

    $id_user = $_GET["id_user"];

    $sql =  "DELETE FROM users where id=".$id_user;

    $delete = false;

    try {
        $conn->query($sql);
        $delete = true;
    } catch (\Throwable $th) {
        $delete = false;

    }
    header("location: index.php");


?>