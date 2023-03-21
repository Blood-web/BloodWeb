<?php

$nameErr = $emailErr = "";
$name = $email = $psw = "";
$server_name = "localhost";
$user_name = "root";
$password = "";
$DBNAME ="Business";
$connection = mysqli_connect($server_name, $user_name, $password, $DBNAME);



    if (empty($_POST["name"])) {
      $nameErr = "Name is required";
    } else {
      
      // check if name only contains letters and whitespace
      if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
        $nameErr = "Only letters and white space allowed";
      }
    }
    if (empty($_POST["email"])) {
        $emailErr = "Email is required";
      } else {
        
        // check if e-mail address is well-formed
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          $emailErr = "Invalid email format";
        }
      }$name = $_REQUEST["name"];$email = $_REQUEST["email"];
      $psw = $_REQUEST["psw"];

      $GLOBALS['connection'];
      if (!$GLOBALS['connection']) { die("Failed ". mysqli_connect_error());}
  
  $query = "INSERT INTO `users` (`name`,`email`,`password`)
            SELECT '".$name."','".$email."','".$psw."' FROM DUAL
            WHERE NOT EXISTS (SELECT * FROM `users` WHERE `email`='".$email."' LIMIT 1);";
            if (mysqli_query($GLOBALS['connection'], $query)) { echo "New User Added, Please return to login page"; }
            else {echo "Error:" . mysqli_error($GLOBALS['connection']); }
          
            echo "<br>";
            echo $_REQUEST["name"].$_REQUEST["email"].$_REQUEST["psw"]; 
      
    
?>

