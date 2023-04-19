<script src="https:/www.jackewers.com/JS/KeyFunctions.js" type="text/javascript"><!-- Adds key functions--></script>
<script src="/BloodWeb_Load.js" type="text/javascript"></script>
<head>
    <title>TEST-SYS</title>
    <link rel="stylesheet" href="/login.css" type="text/css" > </link> 
   <link rel="stylesheet" href="styles.css" type="text/css"></link>
   <style>#CSX>*{font-size:xx-large;}#BloodWeb_NavSwitch{display:none;}
*{font-size:xx-large;}
</style>
</head>

<?php

include('./PHP/GetUsers.php');
?>

<body>
    <div style="text-align:center;background-color:rgb(32,178,170,0.5);padding:2%;">
        <p style="-webkit-text-stroke: .4px #faf;font-size:min(20vw,68px); margin-bottom:0; margin-top:1%;"> Hewers-Trust <p style="font-size:x-large;  margin:0;">(Temporary Holding Page)</p></p>
        
    </div>
<div id="CSX"> 
</div>

<script type="text/javascript">
    setTimeout(() => {
    let U = UserSheet.LoggedInUser; const UI = document.getElementById('CSX');
    console.log(`e u=${UserSheet.LoggedInUser.firstname}`);
    if (Object.keys(U).length>0){    
        UI.innerHTML= ` <h1 style="text-align:center;"> ${U.firstname},${U.lastname} <br><i style="-webkit-text-stroke:2px goldenrod;">Hewers Trust Member</i></h1><h3>Role:${U.Role}, SubRoles:${U.subroles}</h3>
            <h2>Shares:${U.shares} FShares:${U.fshares} <hr> Diamonds:${U.Diamonds} Bombs:${U.bombs}</h2> 
            <h4>Age:${U.age} Phone:${U.phoneNumber} Email:${U.email}</h4>
            <h5 style="text-align:center;">Potential Value:<br>$${(U.shares*10+U.fshares*10)}</h5>`;
    }
    else{UI.innerHTML=`<p>Please Login to view HODLings</p><hr><p> Default Login for users is: (YourPhoneNumber) / (YourfirstName+5857)<br><br> ie..<br>User:<b>0407041557</b><br> Pass:<b><i>Michelle5857</i></b></p>
                
        <br> <p style="font-size:xx-large;"> Any Issues : <button style="font-size:xx-large;" onclick="location.href='tel:+61479000429'">Call/Text me <b style="vertical-align: middle;color:blue; font-size: xx-large;">&phone;</b></button> </p>`;}
    }, 305);
</script>

</body>