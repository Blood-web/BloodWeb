<?php
require_once("GLOB_Connect_Users.php"); // Connection to DataBase

if(isset($_POST["UniPop_Val"])){
    $val = $_REQUEST["UniPop_Val"];
    $type = $_REQUEST["UniPop_Type"];
    if(isset($_REQUEST["New_FirstName"])){
        $query = "update";
    }
    
}
?>