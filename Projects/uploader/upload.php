<?php
if(isset($_FILES["image"])) {
    $file = $_FILES["image"];

    $targetDir = "uploads/";
    $targetFile = $targetDir . uniqid() . "_" . basename($file["name"]);

    if(move_uploaded_file($file["tmp_name"], $targetFile)) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
} else {
    http_response_code(400);
}
?>

