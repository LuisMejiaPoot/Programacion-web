<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clase de PHP</title>
</head>
<body>
    
    <?php
    $asociativo  = ["key1"=>"manuel","key2"=>"carlos","key3"=>"mauricio","key4"=>1500];
    ?>

    <table border="1">
        <thead>
        <tr>
            <th>Valor</th>
        </tr>
        </thead>

    <tbody>


        <?php 
        foreach ($asociativo as $key => $item) {
        ?>
        <tr>
          <td>  <?php echo $item ?></td>
        </tr>

        <?php
        }
        ?>
    </tbody>
    </table>
</body>
</html>