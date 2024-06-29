<?php
echo "<script>console.log('Geting Users');</script>";

require_once("GLOB_Connect_Users.php"); // Connection to DataBase

function Get_Users(){
echo "<script>console.log('Attempting COnnection to BloodWeb Users');</script>";
$query="SELECT * FROM HODLERS";
$result = $GLOBALS["connection"]->query($query);
if($result->num_rows>0){while($row = $result->fetch_assoc()){
    echo "<script>User.pushUsers('".$row["firstname"]."','".$row['lastname']."',".$row["shares"].",".$row["fshares"].",".$row['Diamonds'].",".$row['bombs'].",'".$row["role"]."','".$row["subroles"]."','".$row["phoneNumber"]."','".$row["email"]."', (CheckAge('".$row['birthday']."')) );</script>";}
}
else{echo "<script>console.log('0 Results')</script>";}
}
echo "<script>console.log('att');</script> ";
echo Get_Users();

?>

