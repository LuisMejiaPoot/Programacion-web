<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    
    if(isset($_GET["save"])){
        if($_GET["save"]){
            echo "<p>El usuario ".$_GET["nombre"]." fue insertado</p>";
        }else{
            echo "<p>No se ha podido guardar el usuario</p>";
        }
    }
    ?>
    <form action="guardar.php" method="POST">
        <div class="div_input">
            <label for="user_name">Nombre</label>
            <input type="text" name="user_name" id="" required>
        </div>
        <div class="div_input">
            <label for="last_name">Apellidos</label>
            <input type="text" name="last_name" id="" required>
        </div>
        <div class="div_input">
            <label for="email">Correo</label>
            <input type="email" name="email" id="" required>
        </div>
        <div class="div_input">
            <label for="phone">Telefono</label>
            <input type="text" name="phone" id="" required>
        </div>

        <div>
            <input type="submit" value="Guardar">
        </div>
    </form>
<br><br><br>.
    <?php
    
    $conn = mysqli_connect("127.0.0.1", "root", "", "programacion_web");
    $sql = "SELECT * FROM users";
    $result = $conn->query($sql);     
    while($row = $result->fetch_assoc()) {
        echo  $row["id"]. " - Name: " . $row["name"]. " " . $row["last_name"]. "<br>";
      }  
    ?>
</body>
</html>