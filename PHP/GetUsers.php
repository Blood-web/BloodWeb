<?php
echo "<script>console.log('GetUsers');</script>";

$GLOBALS["server_name"] = "localhost";
$GLOBALS["user_name"] = "bloodweb";
$GLOBALS["password"] = "BLOODWEBMYSQL";
$GLOBALS["DBNAME"] ="Users";

$GLOBALS["connection"] = mysqli_connect($GLOBALS["server_name"], $GLOBALS["user_name"], $GLOBALS["password"], $GLOBALS["DBNAME"]);


function Get_Users(){
echo "<script>console.log('Attempting COnnection to BloodWeb Users');</script>";
if(mysqli_connect_errno($GLOBALS["connection"])){echo "failed MYSCONN";}
else{echo "<script>console.log('connec success');</script>";}
$query="SELECT * FROM HODLERS";
$result = $GLOBALS["connection"]->query($query);
if($result->num_rows>0){while($row = $result->fetch_assoc()){
    echo "<script>UserSheet.pushUsers('".$row["firstname"]."','".$row['lastname']."',".$row["shares"].",".$row["fshares"].",".$row['Diamonds'].",".$row['bombs'].",'".$row["role"]."','".$row["subroles"]."','".$row["phoneNumber"]."','".$row["email"]."', (CheckAge('".$row['birthday']."')) );</script>";}
}
else{echo "<script>console.log('0 Results')</script>";}
}
echo "<script>console.log('att');</script> ";
echo Get_Users();

?>

