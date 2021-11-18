<?php

include "connection.php";

$obj =  new connection();

$conn = $obj->connection_db();
// $name  =  $_GET["user_name"];
// $last_name  =  $_GET["last_name"];
// $email =  $_GET["email"];


// $name  =  $_POST["user_name"];
// $last_name  =  $_POST["last_name"];
// $email =  $_POST["email"];
// $phone =  $_POST["phone"];


$form = [];
parse_str( $_POST["form"],$form);
$name  =  $form["user_name"];
$last_name = $form["last_name"];
$email = $form["email"];
$phone=$form["phone"];






$sql  = "insert into users (name, last_name,email,phone) values ('".$name."', '".$last_name."','".$email."','".$phone."' )";
$response = [];
if ($conn->query($sql) === TRUE) {
    $response["status"] = "success";
    $response["message"] ="Usuario guardado existosamente";
    $sql = "select * from users where email = '".$email."'";

    $result =  $conn->query($sql);
    $data_user =  $result->fetch_assoc();
 
    $response["data_user"] =  $data_user;
    // header('Location: index.php?save=true&nombre='.$name);
  } else {
    $response["status"] = "error";
    $response["message"] ="Error:intente mas tarde";
    // header('Location: index.php?save=false');
  }

 
  $json_response = json_encode($response);
  echo $json_response;
  exit;

// if (!$conn) {
//     die('No pudo conectarse: ' . mysqli_connect_errno());
// }


// try {
//     //code...
//     $insert   = mysqli_query($conn, $sql);
// } catch (\Throwable $th) {
//     throw $th;
// }

?>