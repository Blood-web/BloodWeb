<?php

$server_name = "localhost";
$user_name = "BloodWeb";
$password = "Blood.Net";
$DBNAME ="Users";
$connection = mysqli_connect($server_name, $user_name, $password, $DBNAME);

function Get_Users(){
    if(!$GLOBALS['connection']){die("failed". mysqli_connect_error());}
$query="SELECT * FROM HODLERS";
$result = $GLOBALS['connection']->query($query);
if($result->num_rows>0){while($row = $result->fetch_assoc()){
    echo "<script>User.pushUsers('".$row["firstname"]."','".$row['lastname']."',".$row["shares"].",".$row["fshares"].",".$row['Diamonds'].",'".$row["role"]."','".$row["phoneNumber"]."','".$row["email"]."', (CheckAge('".$row['birthday']."')) );</script>";}
}
else{echo "<script>console.log('0 Results')</script>";}
}

Get_Users();

?>

