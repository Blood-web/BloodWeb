<script src="./KeyFunctions.js" type="text/javascript"></script>
<script src="./index.js" type="text/javascript"></script>

<html lang="en">
<head>
    <title>BloodWeb.net</title>  
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <meta charset="UTF-8">   
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1">
    <meta name="description" content="BloodWeb.net indexPage">
    <link rel="stylesheet" href="BloodWeb_Styles.css" type="text/css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script> 
</head>

<?php 

include('./PHP/GetUsers.php');
include('./PHP/UpdateUsers.php');
session_start();
echo "email=".$_SESSION["email"];
?>


<body onload="BloodWeb.functions.OL()">  
            
    <main class="loggedOUT" >
    
    </main>
   
    <hr>
    <hr id="hr2">

</body>
</html>


