<?php

include "config.php";
class connection 
{
    public function connection_db()
    {
        $conn = mysqli_connect(HOST_DB, USER_DB, PASSWORD_DB, NAME_DB);
        return $conn;
    }
}


?>