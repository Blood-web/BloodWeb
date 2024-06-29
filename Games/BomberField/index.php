

<head>
    <title>Bomber Field Game </title>
    <meta name="description" content=" BomberField - A board guessing game. Aquire Bombs, Bomb the field and win prizes!">
    <link rel="stylesheet" href="/BloodWeb_Styles.css" type="text/css" > </link> 
   <link rel="stylesheet" href="styles.css" type="text/css"></link>
</head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
<script src="https:/www.jackewers.com/JS/KeyFunctions.js" type="text/javascript"> <!-- Adds key functions--> </script>
<script src="../index.js" type="text/javascript"></script>


<?php 
error_reporting(-1);


include('../PHP/GetUsers.php');
include('../PHP/Get_Game_Logs.php');
//$referer = $_SERVER['HTTP_REFERER'];

$name = $_REQUEST['User_Name'];
if($_SERVER['REQUEST_METHOD']=="POST"){ 
    include_once('../BomberField/BomberField.php');
    if (isset($_POST['Add_Bomb'])){ AddBomb(); }
    if (isset($_POST['Post_Bomb'])){ PostBomb($val=$_POST['Post_Bomb'] ); }
    die; exit;
}

?>
<input id="NEW_WinSqrs" name="NEW_WinSqrs" hidden/>
<div id="UPPER_BomberField">
    <span id="LOG">
        <button onclick="document.getElementById('Log_Report').style.display=='none'?document.getElementById('Log_Report').style.display='block':document.getElementById('Log_Report').style.display='none'">
        <p>Game Logs</p>
        </button>
        <div id="Log_Report" style="display:none">
            <p>Temporary Log-Field</p>
            <ul id="Log_Field"></ul>
        </div>
    </span>
    <span id="BomberField_Rules">
        <button onclick="document.getElementById('Rule_Field').style.display=='none'?document.getElementById('Rule_Field').style.display='block':document.getElementById('Rule_Field').style.display='none'">
            <p>Rules:</p>
        </button>
    <div id="Rule_Field" style="display:none">
    <p>Rule List</p>
        <ol> 
            <li> Win the prize (2x(HS)) by using bombs with other users on the available squares</li>
            <li> Bombs can be aquired by converting (FS)</li>   
        
        <ol>
    </div>
    </span>


</div>
<h1>
    Bomber Board  &#128163;
</h1>
<h2 id="BB_WinInfo"><p id="BB_LastWin">Last Winner:</p><p id="BB_WinsLeft">Wins Left:</p></h2>
<form action="index.php" method="post">
<input id="User_Name"name="User_Name" value="t" hidden></input>

<div id="BomberField_Field">
<?php 
$arr = ['A','B','C','D','E','F','G','H',];
$arr2 = ['0','1','2','3','4','5','6','7',];
foreach ($arr as $i) { $x = 0; $arrLength=count($arr2);
    while($x < $arrLength){
        echo'<button name="Post_Bomb" id="BS_Square_'.$i."".$arr2[$x].'" value="'.$i."".$arr2[$x].'"></button>';
        $x++;
    }
}
?>
</div>
<div id="BomberField_UX">
    <span> Fshares: <p id="Fshares_Count"></p></span>
    <button id="Add_Bomb" name="Add_Bomb" disabled>Convert <br>   x1FS ↔️ x2&#128163;</button>
    <span> Bombs: <p id="Bomb_Count"> </p></span>
</div>

</form>




<script>
setTimeout(() => {
    let USER = User.LoggedInUser;


    let LoadNewGame = function(){
        //Needs to run if game is loaded
        let letters = ['A','B','C','D','E','F','G','H'];
        let WINstr='';
        for (i in (1+5+(randomNum(3,5)))){
            let a = letters[randomNum(0,letters.length)]+randomNum(0,7);
            while (WINstr.includes(a)) {
                a = letters[randomNum(0,letters.length)]+randomNum(0,7);
            }
            WINstr+=a;
        }
        document.getElementById("BloodWeb_Floating_Input").value=WINstr;

    }
    let LoadLogs=function(){ let LOGS= BattleBoard.logs.BomberField;
        for (ele in LOGS){ let x = LOGS[ele];
            document.getElementById('Log_Field').innerHTML+=`<li>${x}</li>`}
        }
    let SetBombs=function(){
        let BC=document.getElementById('Bomb_Count'); BC.innerHTML=USER.bombs+`💣`;
        let FC=document.getElementById('Fshares_Count'); FC.innerHTML=USER.fshares;
        let CD = document.getElementById('Add_Bomb');
        if(USER.fshares>0){CD.disabled=false;};
    }
    let Set_WinInfo=function(){
        let LW = document.getElementById('BB_LastWin').innerHTML="";
    }
    let BomberField = BattleBoard.GameSheets.BomberField;

    const Set_Field=function(){
      Set_WinInfo();  SetBoard();  SetBombs(); LoadLogs(); LoadNewGame();
    }
    const SetBoard=function(){
        let W = BomberField.winsqr; let h = BomberField.Hits;
       let d =  document.querySelectorAll('button[id*="BS_Square_"]');
       BattleBoard.methods.TestBomberFieldBoard();
       for (ele in d){let x = d[ele];
            switch (x) {
                case ("BS_Square_"+W)==d.id:
                    x.innerHTML="WINNNER";
                    break;
                default:
                    
                    break;
            }
        }
    }

    Set_Field();
}, 300 );
</script>

<?php



?>

