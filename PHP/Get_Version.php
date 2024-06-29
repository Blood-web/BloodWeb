<?php
require_once('GLOB_Connect_Users.php');
$query="SELECT * FROM InternalTasklist ORDER BY id DESC LIMIT 0,1";
$result = $GLOBALS["connection"]->query($query);
if($result->num_rows>0){while($row = $result->fetch_assoc()){ 
  echo "<script>console.log('Version Connec success'); const ver = '".$row{'ver'}."';
  let web = { 'ver':ver, 
    overview:'".$row["overView"]."' ,
    Major_Tasks:('".$row["MJ_tasks"]."'.split(',')),
    Minor_Tasks:('".$row["MN_tasks"]."'.split(',')), 
    Complete:('".$row["D_tasks"]."'.split(',')), 
    x:'".$row["tasks_left"]."'
  };
  BloodWeb.Status.TaskList=web; 
  BloodWeb.Status.Version=ver; 
</script>";
}}
else{echo "Failed";}
?>