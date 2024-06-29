<?php
if(isset($_POST["submit"])){
$target_dir= 'Uploads/';
$target_file = $target_dir.basename($_FILES["imageUpload"]["name"]);

$uploadOk = 1;
$image_FileType = pathinfo($target_file,PATHINFO_EXTENSION);

if (move_uploaded_file($_FILES["imageUpload"]["tmp_name"],$target_file)){
    echo "The file ". basename( $_FILES["imageUpload"]["name"]). " has been uploaded";   
}
else{echo "Sorry,there was an error during upload";};
}?>