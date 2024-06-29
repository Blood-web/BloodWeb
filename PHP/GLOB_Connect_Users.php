<?php
$GLOBALS["server_name"] = "localhost";
$GLOBALS["user_name"] = "bloodweb";
$GLOBALS["password"] = "BLOODWEBMYSQL";
$GLOBALS["DBNAME"] ="Users";

$GLOBALS["connection"] = mysqli_connect($GLOBALS["server_name"], $GLOBALS["user_name"], $GLOBALS["password"], $GLOBALS["DBNAME"]);
if(mysqli_connect_errno($GLOBALS["connection"])){echo "<script>console.log('Failed MYSCONN');</script>";}
else{echo "<script>console.log('MYSQL connec success');</script>";}
?>