<?php 

include "config.php";
class connections 
{
    public $connections_link = null;
    public function __construct()
    {
        $this->connections_link = mysqli_connect(HOST_DB, USER_DB, PASSWORD_DB, NAME_DB);
        
    }
    
}


?>