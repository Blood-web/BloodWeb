<html>
<script src="https:/www.jackewers.com/JS/KeyFunctions.js" type="text/javascript"><!-- Adds key functions--></script>
<script src="BloodWeb_Load.js" type="text/javascript"></script>
<script src="index.js"></script>
<link type="text/css" rel="stylesheet" href="./login.css">
<title>Login</title>
<body id="LS_BODY">
<?php 

session_start(); 

$return_timer = 3; //seconds
$referer = $_SERVER['HTTP_REFERER'];

include_once('./PHP/GetUsers.php'); //


function LOGIN(){
   $phoneNumber = str_replace(' ','' ,$_REQUEST['phoneNumber']);
   $Replace = array("+61");
   $phoneNumber = str_replace($Replace,'0',$phoneNumber);

   $pass = $_REQUEST['psw'];
        $sql = "SELECT * FROM HODLERS WHERE '$pass'=`password` AND '".$phoneNumber."' = `phoneNumber`  ";
        $result = mysqli_query($GLOBALS["connection"], $sql);
        
        echo "<script>console.log('Attempting to login to server: ref=".$referer."xxx')</script>";
        if (mysqli_num_rows($result) === 1) {
            $row = mysqli_fetch_assoc($result);

            if ($row['phoneNumber'] = $phoneNumber && $row['password'] = $pass) {
                echo '<p class="LS_Box_Text"><b>You have successfully LoggedIn!</b></p> <script>BWEB.tools.appendFixedLogo(document.body);</script>';
                echo "<script> console.log('Logged IN - Appending logo -- adding name -- Returning in".$return_timer."');LS_Name('".$row["firstname"]."');login('".$row["firstname"]."');</script>";
                $_SESSION['name'] = $row['firstname'];

                $_SESSION['phoneNumber'] = $row['phoneNumber'];
                $sql = "UPDATE HODLERS SET LastLoginDate=CURRENT_DATE() WHERE '$pass'=`password` AND '".$phoneNumber."' = `phoneNumber` ;";
                $result = mysqli_query($GLOBALS["connection"], $sql);
                
              
            }
            else{ echo '<p class="LS_Box_Text"><b>Failed to login </b> -Type 14 error: </p>';}

        }
        else{
            echo '<p class="LS_Box_Text"><b>Failed to login </b> <br> Password or Email didn\'t match:... <br>'.$phoneNumber.'  ||  '.$pass;
            echo "<script> BWEB.tools.appendFixedLogo();</script>";
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