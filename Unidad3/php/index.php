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
    if(isset($_GET["save"])){
        if($_GET["save"]){
            echo "<p>El usuario ".$_GET["nombre"]." fue insertado</p>";
        }else{
            echo "<p>No se ha podido guardar el usuario</p>";
        }
    }
    ?>
    <div class="container mx-auto">
    <br><br><br>
    <h4 class="text-center" id="user_message"></h4>
    <form action="guardar.php" method="POST" class="form_ajax">

    <div class="form-group">
        <label for="user_name">Nombre</label>
        <input type="text" class="form-control" name="user_name" required>
    </div>

    <div class="form-group">
        <label for="last_name">Apellidos</label>
        <input type="text" class="form-control" name="last_name" required>
    </div>


    <div class="form-group">
        <label for="email">Correo</label>
        <input type="email" class="form-control" name="email" required>
    </div>


    <div class="form-group">
        <label for="phone">Telefono</label>
        <input type="text" class="form-control" name="phone" required>
    </div>

    <div>
        <input type="submit" value="Guardar" class="btn btn-primary">
    </div>


</form>
    </div>
<br><br><br>.
    <?php
    
    $obj =  new connection();
    $conn = $obj->connection_db();
    $sql = "SELECT * FROM users";
    $result = $conn->query($sql);      
    ?>
    <table class="table container mx-auto table-user">
      <thead class="thead-dark">
        <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Telefono</th>
            <th></th>
        </tr>
        <?php 
            while($row = $result->fetch_assoc()) {

        ?>

            <tr id="fila-<?php echo $row['id'] ?>">
                <td><?php echo $row["name"] ?></td>
                <td><?php echo $row["last_name"] ?></td>
                <td><?php echo $row["email"] ?></td>
                <td><?php echo $row["phone"] ?></td>
                <td>
                    <a href="form_update.php?id_user=<?php echo $row['id']?>" class="btn btn-success">Actualizar</a>
                <button class="btn btn-danger" onclick="eliminar(<?php echo $row['id']?>)"  >Eliminar</button>
                </td>
            </tr>

        <?php
        
            }
        ?>
      </thead>
    </table>
</body>
<!-- <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script> -->
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous"></script>
<script src="script.app.js"></script>
</html>