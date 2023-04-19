<?php
echo "Hello World"; 
error_reporting(1);


$hopstname = 'localhost';
$upser= 'BLOODWEB';
$ppass= 'BLOOD.WEB';
$DpB = 'Users';
$mysqli = mysqli_connect($hopstname,$upser,$ppass,$DpB); 
if($mysqli->connect_error){
    printf ("Connection NOT FUCKING True");
}
else {printf ("Failed connec - lie");}

echo phpinfo();




$resuilt = mysqli_query($connection,"SELECT * FROM HODLERS");
if(!$resuilt){
    echo 'FAILED MYSQL connection';
}
else {echo 'FUCK YOU';}

?>