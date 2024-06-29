<script>console.log('Get_Game_Logs');</script>
<?php 

$GLOBALS["server_name"] = "localhost";
$GLOBALS["user_name"] = "bloodweb";
$GLOBALS["password"] = "BLOODWEBMYSQL";
$GLOBALS["DBNAME"] ="Users";

$GLOBALS["connection"] = mysqli_connect($GLOBALS["server_name"], $GLOBALS["user_name"], $GLOBALS["password"], $GLOBALS["DBNAME"]);

$name = $_REQUEST['User_Name'];

function getLogs(){
    //

 function Get_BomberFieldLogs($GameID){

    $query="SELECT * FROM BOMBERFIELD_LOGS";
    $result = $GLOBALS["connection"]->query($query);
    if($result->num_rows>0){while($row = $result->fetch_assoc()){
        echo "<script> console.log('xx'); BattleBoard.methods.addBomberFieldLogs(['".$row["GameID"]."','".$row["logger"]."' ,'".$row['log']."']); </script>";
    }}
    else{echo "No Logs";}  
    }
    function Get_Previous_BomberFieldWins(){$winLogs = $GLOBALS['connection']->query("SELECT * FROM BomberFieldLogs WHERE log LIKE '%win%' ;");
        if($result->num_rows>0){while($row = $winLogs->fetch_assoc()){echo "<script>BattleBoard.logs.BomberFieldWinLogs.push('".$row['logger']." :".$row["log"]."'); </script>";} }
    }

    function getNewestBomberField(){$query="SELECT * FROM BOMBERFIELD ORDER BY id DESC LIMIT 0,1";
        $result = $GLOBALS['connection']->query($query);
        if($result->num_rows>0){while($row = $result->fetch_assoc()){ Get_BomberFieldLogs($GameID=$row["id"]);
            echo "<script>BattleBoard.methods.PushBomberField(".$row["gamestatus"].",".$row['id'].",'".$row["Minor_Wins"]."','".$row["Major_Wins"]."','".$row["freeBombs"]."','".$row['hits']."' );console.log('BomberField pushed to BattleBoard');</script>";}}
        else{echo "<script>console.log('0 Results For BomberField SQL')</script>";}
    }

    function loadGames(){
        getNewestBomberField(); Get_Previous_BomberFieldWins();
    }
    loadGames();
}



function log_Game($GameID="1",$BomberFieldLog="No log",$name){
if(mysqli_connect_errno($GLOBALS["connection"])){echo "failed GAME-LOG / MYSCONN";}
else{$query="INSERT INTO BOMBERFIELD_LOGS (`log`,`logger`,`GameID`) VALUES ('".$BomberFieldLog."','".$name."',".$GameID.");";
$result = mysqli_query($GLOBALS['connection'],$query);
if($result){echo "2";}
else{echo "1";}
}
}
getLogs();
?>