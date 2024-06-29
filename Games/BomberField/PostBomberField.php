<head>  
    <link rel="stylesheet" href="styles.css" type="text/css"></link>
</head>
<body>
<?php
$Message = $_GET['data'];
$RES = $_GET['result'];


echo "<h1> ".$Message;
if ($RES){echo "<br>Congrats You have Won!.</h1> <br> <p>Your Prize: ".$RES; }
else{echo "</h1>";}

echo "<br><p>Tap anywhere to continue..</p>";

?>
</body>
<script type="text/javascript">document.body.addEventListener('click',function(){window.location='index.php';});</script> 
<!-- RETURN ON CLICK-->