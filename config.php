echo "config.php";
$dsn ="mysql:host=127.0.0.1;dbname=Users;charset=utf8mb4";

$options = [
    PDO::ATTR_EMULATE_PREPARES =>false, //disable
    PDO::ATTR_ERRMODE          =>PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE =>PDO::FETCH_ASSOC,
];
$pdo = new PDO($dsn,"BloodWeb","Blood.Net",$options);
echo $pdo;


$server_name = "localhost";
$user_name = "BloodWeb";
$password = "Blood.Net";
$DBNAME ="Users";
$connection = mysqli_connect($server_name, $user_name, $password, $DBNAME);

if(!$GLOBALS['connection']){die("failed". mysqli_connect_error());}
$query="SELECT * FROM HODLERS";
$result = $GLOBALS['connection']->query($query);
if($result->num_rows>0){while($row = $result->fetch_assoc()){echo "name-".$row["name"];}}
else{echo "0 Results";}

function hi(){
    echo "HI";
}