<script src="https:/www.jackewers.com/JS/KeyFunctions.js" type="text/javascript"><!-- Adds key functions--></script>
<script src="BloodWeb_Load.js" type="text/javascript"></script>
<script src="index.js"></script>
<title>Login</title>
<?php 

session_start(); 


$referer = $_SERVER['HTTP_REFERER'];

$server_name = "localhost";
$user_name = "BloodWeb";
$password = "Blood.Net";
$DBNAME ="Users";
$connection = mysqli_connect($server_name, $user_name, $password, $DBNAME);
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
                echo "<h1>You have successfully LoggedIn!<h1>";
                echo "<script> console.log('Logged IN');LS_Name('".$row["firstname"]."');login('".$row["firstname"]."');</script>";
                $_SESSION['name'] = $row['firstname'];

                $_SESSION['phoneNumber'] = $row['phoneNumber'];
                $sql = "UPDATE HODLERS SET LastLoginDate=CURRENT_DATE() WHERE '$pass'=`password` AND '".$phoneNumber."' = `phoneNumber` ;";
                $result = mysqli_query($GLOBALS["connection"], $sql);
                
              
            }
            else{ echo "Failed to login\nType 14 error: one of these 2 didn't match:... ".$phoneNumber."  ||  ".$pass;}

        }
        else{
            //+echo "No Matches";
            echo "Failed to login\nPassword Error: one of these 2 didn't match:... ".$phoneNumber."  ||  ".$pass;
        }
}
LOGIN();

function RETRN(){
    header('Refresh:3; url='.$GLOBALS["referer"]);
    exit();
}
echo "<p> Returning in 3 seconds..</p>";
RETRN();
?>
