<body>
</body>
<script type="text/javascript"> console.log('BattleShip.php');
    document.getElementById("NEW_WinSqrs").value = BattleBoard.Rules.Bomber[(randomNum(0,BattleBoard.Rules.Bomber.length))];
<script>
<?php
include_once('../PHP/Get_Game_Logs.php');

if(!function_exists('str_contains')){
    function str_contains(string $haystack, string $needle): bool
    {
        return '' === $needle || false !== strpos($haystack,$needle);
    }
}
$ini_BF_Query=mysqli_query($GLOBALS["connection"],$XO="SELECT * FROM BOMBERFIELD ORDER BY id DESC LIMIT 0,1");
if($ini_BF_Query->num_rows>0){
    while($row = $ini_BF_Query->fetch_assoc($XO)){
        $GLOBALS["BomberField_id"]=$row["id"];
}
}
//echo "<script>console.alert('".$GLOBALS["BomberField_id"]."')</script>";
function AddBomb(){ 
    
    $query="UPDATE HODLERS SET fshares=fshares-1,bombs=bombs+2,totalBombs=totalBombs+1 WHERE `firstname` = '".$GLOBALS["name"]."' AND fshares > 0;";
    $result = mysqli_query($GLOBALS["connection"], $query);
    if ($result)  {    $GLOBALS["h6"]= "You have Purchased a Bomb";  $h6=$GLOBALS["h6"];//log_Game($h6,$GLOBALS["name"]); 
        echo "<script> BattleBoard.methods.addBomberFieldLogs('".$h6." :".$GLOBALS["name"]."'); </script>";
      echo "<script> window.location = 'http://www.bloodweb.net/BomberField/PostBomberField.php?data=".$GLOBALS["h6"]."'</script>";
    log_Game($GLOBALS["BomberField_id"],$h6="purchased a bomb",$GLOBALS["name"]);
        die; exit;
    }
    else{ echo "Couldn't Add Bomb"; die; exit; }
}

function Update_BomberBoard(){$win_QR= mysqli_query($GLOBALS["connection"],$wuq="UPDATE BomberField SET WinsLeft=WinsLeft-1 WHERE id=".$GLOBALS["BomberField_id"].";");}
function PostBomb($val){ 
    function Subtract_Bombs(){
        $Bomb_Removal_Query="UPDATE HODLERS SET bombs=bombs-1 WHERE `firstname` = '".$GLOBALS["name"]."' AND bombs > 0;";
        $result2 = mysqli_query($GLOBALS["connection"],$Bomb_Removal_Query);
    }
    function Post_Hit($val){
        $logHit="UPDATE BOMBERFIELD SET hits=CONCAT(hits,'".$val."') WHERE id =".$GLOBALS["BomberField_id"].";";
        $result4= mysqli_query($GLOBALS["connection"],$logHit); if($result4){echo "Sucesss";}
    }

if($val){
    Subtract_Bombs();Post_Hit($val);
        $GLOBALS["h6"] = "Bomb has Detonated Square:".$val.""; 
        $testWinQuery="SELECT * FROM BOMBERFIELD ORDER BY id DESC LIMIT 0,1 ";
        $testWinRes = mysqli_query($GLOBALS["connection"],$testWinQuery);
        if($testWinRes->num_rows>0){
            while($row = $testWinRes->fetch_assoc()){
                $GameWinner=$row["Major_Wins"];$winSqrs=$row["Minor_Wins"];$freeBombs=$row["freeBombs"];$ID=$row["id"];    
                
                
                if(str_contains($GameWinner,$val)){ $h6="Hit the mother mine! +2x(HS) :";}
                elseif(str_contains($winSqrs,$val) !== false){ 
                    if((Update_BomberBoard($ID))!==false){ $h6="Hit a mine! (enjoy a minorWin) :";
                    header("Refresh:.1; url=http://www.bloodweb.net/BomberField/PostBomberField.php?data=".$GLOBALS["h6"]."?result=Win"); 
                }  else {echo"Failed to update BomberBoard";} } 
                elseif(str_contains($freeBombs,$val)){ $newBombs=rand(1,2);
                    $h6="Won ".$newBombs." FreeBombs on:";
                    $AddFB = "UPDATE HODLERS SET bombs=bombs+".$newBombs.", totalBombs=totalBombs+".$newBombs.";";
                    $AddFB_Success=mysqli_query($GLOBALS["connection"],$AddFB);
                    if($AddFB_Success){echo "<script>console.log('Added Free Bombs Successfully');</script>";}
                }
                else{$h6="Hit... Nothing :";
                }
                    
            
            }
        }  
        else{echo "Couldn't Post BomB"; die; exit;}
     }      
    else{echo "Failed to Post Bomb, No bombs?";die; exit; }

    log_Game($GLOBALS["BomberField_id"],$h6.$val,$GLOBALS["name"]);
    //header("Refresh:5.1; url=http://www.bloodweb.net/BomberField/PostBomberField.php?data=You%20".$h6.$val);

}

?>