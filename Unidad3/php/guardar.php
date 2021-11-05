<?php

// $name  =  $_GET["user_name"];
// $last_name  =  $_GET["last_name"];
// $email =  $_GET["email"];

// print_r($_POST);


$name  =  $_POST["user_name"];
$last_name  =  $_POST["last_name"];
$email =  $_POST["email"];
$phone =  $_POST["phone"];

// if ($phone == "9991098861") {
//     header('Location: index.php?save=true&nombre='.$name);
// }else{
//     header('Location: index.php?save=false');
// }

$conn = mysqli_connect("127.0.0.1", "root", "", "programacion_web");

$sql  = "insert into users (name, last_name,email,phone) values ('".$name."', '".$last_name."','".$email."','".$phone."' )";
if ($conn->query($sql) === TRUE) {
    header('Location: index.php?save=true&nombre='.$name);
  } else {
    header('Location: index.php?save=false');
  }

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