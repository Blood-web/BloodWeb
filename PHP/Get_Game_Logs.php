<?php 
$server_name = "localhost";
$user_name = "BloodWeb";
$password = "Blood.Net";
$DBNAME ="Users";
$connection = mysqli_connect($server_name, $user_name, $password, $DBNAME);
$name = $_REQUEST['User_Name'];

function getLogs(){
 function Get_BomberFieldLogs($GameID){
    $query="SELECT * FROM BattleShipLogs WHERE GameID =".$GameID." ORDER BY id DESC LIMIT 0,20";
    $result = $GLOBALS['connection']->query($query);
    if($result->num_rows>0){while($row = $result->fetch_assoc()){
        echo "<script>BattleBoard.methods.addShipLogs('".$row["logger"]." :".$row['log']."'); </script>";
    }}
    else{echo "No Logs";}  
    }
    function Get_Previous_BomberFieldWins(){$winLogs = $GLOBALS['connection']->query("SELECT * FROM BattleShipLogs WHERE log LIKE '%win%' ;");
        if($result->num_rows>0){while($row = $winLogs->fetch_assoc()){echo "<script>BattleBoard.logs.BomberFieldWinLogs.push('".$row['logger']." :".$row["log"]."'); </script>";} }
    }

    function getNewestBomberField(){$query="SELECT * FROM BattleShip ORDER BY id DESC LIMIT 0,1";
        $result = $GLOBALS['connection']->query($query);
        if($result->num_rows>0){while($row = $result->fetch_assoc()){ Get_BomberFieldLogs($GameID=$row["id"]);
            echo "<script>BattleBoard.methods.PushShip(".$row["gamestatus"].",".$row['id'].",'".$row["Minor_Wins"]."','".$row["Major_Wins"]."','".$row["freeBombs"]."','".$row['hits']."' );console.log('BomberField pushed to BattleBoard');</script>";}}
        else{echo "<script>console.log('0 Results For battleship SQL')</script>";}
    }

    function loadGames(){
        getNewestBomberField(); Get_Previous_BomberFieldWins();
    }
    loadGames();
}



function log_Game($GameID="1",$ShipLog="No log",$name){

if(!$GLOBALS['connection']){die("failed". mysqli_connect_error());}
$query="INSERT INTO BattleShipLogs (`log`,`logger`,`GameID`) VALUES ('".$ShipLog."','".$name."','".$GameID."');";
$result = mysqli_query($GLOBALS['connection'],$query);
if($result){echo "2";}
else{echo "1";}
}

getLogs();
?>