<?php 
    include "connection.php";

    $obj =  new connection();

    $conn = $obj->connection_db();


    $name =  $_POST["user_name"];
    $last_name = $_POST["last_name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $id_user = $_POST["id_user"];

    $sql  = "UPDATE users  SET name='".$name."',last_name='".$last_name."' ,
    email ='".$email."', phone ='".$phone."' WHERE  id = '".$id_user."' ";

    $update =  false;
    try {
       $conn->query($sql);
       $update =  true;
    } catch (\Throwable $th) {
        $update = false;
    }

    
    if ($update) {
        header("location: index.php");
    }else{
        header("location: form_update.php?id_user=".$id_user."&update=false");
    }



 ?>