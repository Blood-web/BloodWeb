<?php 

echo "<b>".$_SERVER['SERVER_NAME']."</b><br>Time/Date :: <br>";

require __DIR__ . '/Tasklist/Tasks.php';
    

$external = file_get_contents('Projects/image_slider/index.html');

print $external;
    
    echo TaskList($call = 'check');
?>

<html>
<?php
    
    
 
  

?>
<head>
    <link href="TaskList/Tasklist.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="Projects/Image_slider/styles.css" type="text/css">
</head>
<body>


    <hr id="hr2">
    <script src="Projects/Image_slider/index.js" type="text/javascript"></script>
</body>
</html>
