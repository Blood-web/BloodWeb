<?php
echo "<b>".$_SERVER['SERVER_NAME']."</b><br>";
$server_name = "localhost";
$user_name = "root";
$password = "";
$DBNAME ="Business";
$connection = mysqli_connect($server_name, $user_name, $password, $DBNAME);


date_default_timezone_set("Australia/Perth");
$hours = date("G"); 
$day = date("Y-m-d");
$time = date("G:i:s");

if($hours>12){  
  echo "<i><b>".date("l")."\n".date(($hours-12).":i:s")."PM / ".date("d-m-Y")."</b></i>";
}
else{
  echo "<i><b>".date("l")."\n".$time."AM / ".date("d-m-Y")."</b></i>";
}




if( $_SERVER['REQUEST_METHOD'] == 'POST' ) {

  switch ($_POST) {
      case isset($_POST['INSERT_Tasks']):
          $call = 'INSERT';  $type='Tasks';
      break;
     case isset($_POST['DELETE_Tasks']):
          $call = 'DELETE'; $type='Tasks';
    $val=isset($_POST[('DELETE_Tasks[]')]) ? $_POST[('DELETE_Tasks[]')] : array() || array("_test");
      
          break;
      case isset($_POST['UPDATE_Tasks']):
        $call = 'UPDATE'; $type='Tasks';
    $val=isset($_POST[($call.'_'.$type.'[]')]) ? $_POST[($call.'_'.$type.'[]')] : array() || array("_test");
      
        break;
      case isset($_POST['INSERT_Project']):
        $call = 'INSERT'; $type="Project";
        CreateProject($val=isset($_POST['INSERT_Project'])); die;
      break;

      case isset($_POST['DELETE_Project']):
        DeleteProject($val=isset($_POST['DELETE_Table'])); die;
      break;

      default:$call = 'check'; echo TaskList($tasklist='tasklist',$call); 
      
  }
  print_r($_POST);
  echo $_POST["DELETE_Tasks"];
  
    $priority=(isset($_POST['Tasks_Priority'])) ? $_POST['Tasks_Priority'] : array() ;
    echo $call.'=call  val ='.$val;  
     if($val && $call!="check"){  
      echo Tasklist($call,$val,$priority); }
   
}

function ReloadPage(){
  header("Refresh:0");
}




function CreateProject($val,$type='general'){
  $query = "INSERT INTO `projects` (`name`)
  SELECT '".$val."','".$GLOBALS['time'].$GLOBALS['day']."' FROM DUAL 
  WHERE NOT EXISTS (SELECT * FROM `projects` WHERE `name`='".$val."' LIMIT 1);";
if (mysqli_query($GLOBALS['connection'], $query)) { echo "<script>console.log('>>Test ADded');</script>"; }
  else {echo "Error:" . mysqli_error($GLOBALS['connection']); }
}  

function DeleteProject($val){
  $query = "UPDATE `projects` SET `active`=0 WHERE `name`=".$val.";";
  if (mysqli_query($GLOBALS['connection'], $query)) { echo "<script>console.log('>>Test ADded');</script>"; }
  else {echo "Error:" . mysqli_error($GLOBALS['connection']); }
}


function InsertTestTask(){
    $query = "INSERT INTO `tasklist` (`id`,`Tasks`,`priority`,`date`,`time`)
    SELECT 1,'_test','0','".$GLOBALS['day']."','".$GLOBALS['time']."' FROM DUAL 
    WHERE NOT EXISTS (SELECT * FROM `tasklist` 
    WHERE `id`=1 AND `Tasks`='_test' LIMIT 1);";
  if (mysqli_query($GLOBALS['connection'], $query)) { echo "<script>console.log('>>Test ADded');</script>"; }
  else {echo "Error:" . mysqli_error($GLOBALS['connection']); }
}

function InsertTasks($tasklist='tasklist',$val,$priority){
    $query = "INSERT INTO `".$tasklist."` (`Tasks`,`priority`,`date`,`time`)
    SELECT '".$val."','".$priority."','".$GLOBALS['day']."','".$GLOBALS['time']."' FROM DUAL 
    WHERE NOT EXISTS (SELECT * FROM `tasklist` WHERE `Tasks`='".$val."' LIMIT 1);";
    
    if (mysqli_query($GLOBALS['connection'], $query)) { echo "<script>console.log('>>Task Inserted:<<: ".$val."');</script>"; }
    else {echo "Error:" . mysqli_error($GLOBALS['connection']); }
}

function UpdateTasks($tasklist='tasklist',$id,$priority,$favourited='0'){
  $query="UPDATE `".$tasklist."` SET `priority`='".$priority."',
  `favourited`=".$favourited.",
  `LastAlterDate`='".$date."',
  `LastAlterTime`='".$time."'
  WHERE `id`=".$id.";";
  if (mysqli_query($GLOBALS['connection'], $query)) { echo "<script>console.log('>>Task Inserted:<<: ".$val."');</script>"; }
    else {echo "Error:" . mysqli_error($GLOBALS['connection']); }
}

function RemoveTasks($val){ 
      $query = "DELETE * FROM tasklist WHERE id = ".$val.";";
      if (!mysqli_query($GLOBALS['connection'], $query)) {echo "Error:" . mysqli_error($GLOBALS['connection']);}
}

function UpdatePriority($val,$priority){
  
  foreach($val as $val){
    $query= "UPDATE tasklist SET priority = ".$priority.",LastAlterDate=".$GLOBALS['day']." WHERE id = ".$val.";";
    if (!mysqli_query($GLOBALS['connection'], $query)) {echo "Error:" . mysqli_error($GLOBALS['connection']);}
  } 

}

function CheckTasks(){ 
  echo "<script>console.log('Checking Tasks');  </script>";
  $GLOBALS['connection'];
  if (!$GLOBALS['connection']) { die("Failed ". mysqli_connect_error());}
  
  $query = " SELECT * FROM `projects`;";
  echo "<script>if(Tasks.Projects!=[]){for(ele in Tasks.Projects){Tasks.Projects.unshift();}}</script>";
  $result = $GLOBALS['connection']->query($query);
  if ($result->num_rows > 0) { while($row = $result->fetch_assoc()) {
        echo "<script>PushProject('".$row["name"]."');</script>";
    }
  } 
  else {echo "0 results";}  


  $query = " SELECT * FROM `tasklist`;";
  echo "<script>if(Tasks.TASKS!=[]){for(ele in Tasks.TASKS){Tasks.TASKS.unshift();}}</script>";
  $result = $GLOBALS['connection']->query($query);
  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<script>PushTasks({id:".$row["id"].",TaskText:'". $row["Tasks"].
            "',Priority:". $row["priority"].",Favourited:". $row["favourited"].
            ",Date:'".$row["date"]."',Time:'".$row["time"].
            "',Project:'".$row["ParentProject"]."'});</script>";
    }
  } 
  else {echo "0 results";}                 
echo "<script>console.log('Check task php function was ran, Sorting Takss');SortTaskList('Priority');</script>"; return;

}


function TaskList($tasklist="tasklist",$call="", $val="",$priority='0'){ 
  $GLOBALS['connection'];
  if (!$GLOBALS['connection']) { die("Failed ". mysqli_connect_error());}
    echo 'Task COnnecition';
    switch ($call) { 
      case 'check': CheckTasks(); break;
      case 'UPDATE': UpdatePriority($val,$priority);  break;
      case 'DELETE': foreach($val as $val){RemoveTasks($val);}break;
      case 'INSERT': foreach($val as $val){ 
          if($val!=""){InsertTasks($tasklist,$val,$priority,$favourited='0');}
          if($val=""){ InsertTestTask(); break;     }
        } 
        break;
  
     $GLOBALS['connection']->close();
    }            
}
  
CheckTasks();
 
?>

