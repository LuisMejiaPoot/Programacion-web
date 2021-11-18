<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">

</head>
<body>
    <?php
    include "connection.php";
    $id_user = $_GET["id_user"];
    $obj = new connection();
    $conn =  $obj->connection_db();

    $sql = "select * from users where id= ".$id_user;
    $result = $conn->query($sql);  
    $data  =  $result->fetch_assoc();
   
    if (isset($_GET["update"])) {
       
        echo "<h4 class='text-danger text-center'>No se ha podido modificar el usuario</h4>";
    }
    ?>
    <div class="container mx-auto">
        <h1 class="text-center">Actualizar usuario</h1>
        <br><br>
        <h4 class="text-center" id="message_update"></h4>
        <p class="text-center" id="messsage_redirect"></p>
    <form action="update.php" method="POST" class="form_ajax_update">

    <div class="form-group">
        <label for="user_name">Nombre</label>
        <input type="text" class="form-control" name="user_name" required value="<?php echo $data['name'] ?>">
    </div>

    <div class="form-group">
        <label for="last_name">Apellidos</label>
        <input type="text" class="form-control" name="last_name" required value="<?php echo $data['last_name'] ?>">
    </div>


    <div class="form-group">
        <label for="email">Correo</label>
        <input type="email" class="form-control" name="email" required value="<?php echo $data['email'] ?>">
    </div>


    <div class="form-group">
        <label for="phone">Telefono</label>
        <input type="text" class="form-control" name="phone" required value="<?php echo $data['phone'] ?>">
    </div>

    <input type="hidden" name="id_user" value="<?php echo $id_user ?>">

    <div>
        <input type="submit" value="Modificar" class="btn btn-primary">
    </div>
</form>
    </div>
<br><br><br>.


</body>
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous"></script>
<script src="script.app.js"></script>
</html>