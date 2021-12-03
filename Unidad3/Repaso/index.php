<!DOCTYPE html>
<html lang="en">
    <?php
    
        include 'header.php';
        
    ?>
<body>
    
    <?php
        include "connections.php";
        $obj = new  connections();
        $conn =  $obj->connections_link;
        $sql  ="select * from users";
        $result = $conn->query($sql);  

        
    ?>
    <br><br><br><br><br>
    <div class="contenedor-dashboard  mx-auto">

        <?php
        while ($row = $result->fetch_assoc()){
        ?>

        <div>
            <form class="formulario-update" action="actualizar.php" method="POST">
                <div class="form-group">
                    <label for="name<?php echo $row["id"]?>">Nombre</label>
                    <input name="nombre" type="text" class="form-control" id="name<?php echo $row["id"]?>" aria-describedby="emailHelp" value="<?php echo $row['name'] ?>"> 
                </div>
                <div class="form-group">
                    <label for="email<?php echo $row["id"]?>">Password</label>
                    <input required name="correo" type="email" class="form-control"for="email<?php echo $row["id"]?>" value="<?php echo $row["email"] ?>">
                </div>
                <input type="hidden" name="id" value="<?php echo $row['id']?> ">

                <button type="submit" class="btn btn-primary">Actualizar</button>
            </form>
            
        </div>

        <?php } ?>
    </div>

</body>


<?php
    
    include 'footer.php';
?>
</html>