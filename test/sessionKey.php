<script src="../KeyFunctions.js" type="text/javascript"></script>
<script src="../index.js" type="text/javascript"></script>
<html lang="en">
<head>
    <title>Test Session</title>
</head>

<body onload="">
</body>

<script type="text/javascript">
    
    window.addEventListener("load",create_sessionKey,true);
    
    function create_sessionKey(seg_sts=''){
        console.log("Segmenting sessionKey");
        (typeof User.f.toggle_testSession() !== 'function')?seg_sts="Key Segmation complete":seg_sts="Key Segmentation error, key may not exist";
        User.f.toggle_testSession();
        appendFixedLogo(
            `BloodWeb ${seg_sts}`,'', 3500,' Returning in 3 seconds..',true
        );
    }
</script>


</html>