<?php 
    include "connection.php";

    $obj =  new connection();

    $conn = $obj->connection_db();


    // $name =  $_POST["user_name"];
    // $last_name = $_POST["last_name"];
    // $email = $_POST["email"];
    // $phone = $_POST["phone"];
    // $id_user = $_POST["id_user"];

    $form = [];
    parse_str( $_POST["form"],$form);

    $name  = $form["user_name"];
    $last_name = $form["last_name"];
    $email = $form["email"];
    $phone =  $form["phone"];
    $id_user = $form["id_user"];


    $sql  = "UPDATE users  SET name='".$name."',last_name='".$last_name."' ,
    email ='".$email."', phone ='".$phone."' WHERE  id = '".$id_user."' ";

    $update =  false;
    $response= [];
    try {
       $conn->query($sql);
       $update =  true;
       $response["status"] = "success";
       $response["message"] = "Usuario actualizado";
    } catch (\Throwable $th) {
        $response["status"] = "error";
        $response["message"] = "Error: intente mas tarde";
        $update = false;
    }

    echo json_encode($response);
    
    // if ($update) {
    //     header("location: index.php");
    // }else{
    //     header("location: form_update.php?id_user=".$id_user."&update=false");
    // }



 ?>