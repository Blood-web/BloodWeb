<html>
<script src="https:/www.jackewers.com/JS/KeyFunctions.js" type="text/javascript"><!-- Adds key functions--></script>
<script src="index.js" type="text/javascript"></script>
<script src="index.js"></script>
<link type="text/css" rel="stylesheet" href="./BloodWeb_Styles.css">
<title>Login</title>
<body id="LS_BODY">
<?php 

session_start(); 

$return_timer = 3; //seconds
$referer = $_SERVER['HTTP_REFERER'];

include_once('./PHP/GetUsers.php'); //


function LOGIN(){
  // $user_email = str_replace(' ','' ,$_REQUEST['phoneNumber']);
  // $Replace = array("+61");
  // $user_email = str_replace($Replace,'0',$user_email);
  $user_email = $_REQUEST['user_email'];
   $pass = $_REQUEST['psw'];
        $sql = "SELECT * FROM HODLERS WHERE '$pass'=`password` AND '".$user_email."' = `email`  ";
        $result = mysqli_query($GLOBALS["connection"], $sql);
        
        echo "<script>console.log('Attempting to login to server: ref=".$referer."xxx')</script>";
        if (mysqli_num_rows($result) === 1) {
            $row = mysqli_fetch_assoc($result);

            if ($row['phoneNumber'] = $user_email && $row['password'] = $pass) {
                $usr_glob = "'".$row["firstname"]."','".$row['lastname']."',".$row['Diamonds'].",".$row['bombs'].",'".$row["role"]."','".$row["subroles"]."','".$row["phoneNumber"]."','".$row["email"]."', (CheckAge('".$row['birthday']."'))" ;
                echo '<script>appendFixedLogo("<h1>You Have Successfully Logged-In!</h1>","min(75vh,75vw)",5000,"<h2>Returning in 5..</h2>");</script>';
                echo "<script> console.log('Logged IN - Appending logo -- adding name -- Returning in".$return_timer."');LS_Name('".$row["firstname"]."');
                console.log('glob=".$usr_glob."');
                User.login(".$usr_glob");
                </script>";
                $_SESSION['name'] = $row['firstname'];

                $_SESSION['email'] = $row['email'];
                $sql = "UPDATE HODLERS SET LastLoginDate=CURRENT_DATE() WHERE '$pass'=`password` AND '".$user_email."' = `phoneNumber` ;";
                $result = mysqli_query($GLOBALS["connection"], $sql);
                
              
            }
            else{ echo '<p class="LS_Box_Text"><b>Failed to login </b> -Type 14 error: </p>';}

        }
        else{
            echo '<p class="LS_Box_Text"><b>Failed to login </b> <br> Password or Email didn\'t match:... <br>'.$user_email.'  ||  '.$pass;
            echo "<script>appendFixedLogo();</script>";
        }
}
LOGIN();

function RETRN(){
    header('Refresh:3; url='.$GLOBALS["referer"]);
    exit();
}
echo '<p class="LS_Box_Text"><u> Returning in '.$return_timer.' seconds..<u></p>';
RETRN();
?></body>
<html>