<?php
//include_once('../PHP/Get_Game_Logs.php');
error_reporting(-1);

function AddBomb(){ 
    
    $query="UPDATE HODLERS SET fshares=fshares-1,bombs=bombs+1,totalBombsPurchased=totalBombsPurchased+1 WHERE `firstname` = '".$GLOBALS["name"]."' AND fshares > 0;";
    $result = mysqli_query($GLOBALS["connection"], $query);
    if ($result)  {    $GLOBALS["h6"]= "You have Purchased a Bomb";  $h6=$GLOBALS["h6"];//logShip($h6,$GLOBALS["name"]); 
        echo "<script> BattleBoard.methods.addShipLogs('".$h6." :".$GLOBALS["name"]."'); </script>";
      echo "<script> window.location = 'http://www.bloodweb.net/BattleShip/PostBattleShip.php?data=".$GLOBALS["h6"]."'</script>";
    logShip($h6="purchased a bomb",$GLOBALS["name"]);
        die; exit;
    }
    else{echo "Couldn't Add Bomb"; die; exit;
    }
}

function PostBomb($val){ 
$query2="UPDATE HODLERS SET bombs=bombs-1 WHERE `firstname` = '".$GLOBALS["name"]."' AND bombs > 0;";
$result2 = mysqli_query($GLOBALS["connection"], $query2);
if ($result2){ $query="UPDATE BattleShip SET hits=CONCAT(hits,'".$val."') WHERE id = 1;";
    $result = mysqli_query($GLOBALS["connection"], $query);
   if ($result){ $GLOBALS["h6"] = "Bomb has Detonated Square:".$val.""; 
        $testWinQuery="SELECT * FROM BattleShip ORDER BY id DESC LIMIT 0,1 ";
        $testWinRes = mysqli_query($GLOBALS["connection"],$testWinQuery);
        if($testWinRes->num_rows>0){
            while($row = $testWinRes->fetch_assoc()){
                if(strpos($row["WinSqrs"],$val)){header("Refresh:2; url=http://www.bloodweb.net/BattleShip/PostBattleShip.php?data=".$GLOBALS["h6"]."result=MajorWin"); }
                //elseif(strpos($row["Minor_Wins"],$val)){header("Refresh:2; url=http://www.bloodweb.net/BattleShip/PostBattleShip.php?data=".$GLOBALS["h6"]."result=MajorWin"); }
                else{header("Refresh:2; url=http://www.bloodweb.net/BattleShip/PostBattleShip.php?data=".$GLOBALS["h6"]."result=NoWin");}
                    
            
            }
        }  
        else{echo "Couldn't Post BomB"; die; exit;}
     }      
    else{echo "Failed to Post Bomb, No bombs?";die; exit; }
}
}




?>