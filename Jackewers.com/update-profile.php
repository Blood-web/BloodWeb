<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture form fields and add them to the profile array
    $profile = [
        "name" => $_POST["name"] ?? 'default_name',
        "handle" => $_POST["handle"] ?? 'default_handle',
        "age" => $_POST["age"] ?? 0,
        "currently" => $_POST["currently"] ?? 'default_currently',
        "mood" => $_POST["mood"] ?? 'default_mood',
        "jackewers.com" => "active",
        "bloodweb.net" => "active"
    ];

    $lastProfileEdit = date("d/m/Y");

    $profileJson = json_encode($profile, JSON_PRETTY_PRINT);
    echo "<pre>"; // Makes the output easier to read
    var_dump($profileJson);
    echo "</pre>";

    $jsContent = "const profile = $profileJson;\nconst last_profile_edit=\"$lastProfileEdit\";";

    file_put_contents("/var/www/html/Jackewers.com/profile.js", $jsContent);
}
?>
    <form method="POST">
        <input type="text" name="name" placeholder="Name">
        <input type="text" name="handle" placeholder="Handle">
        <input type="number" name="age" placeholder="Age">
        <input type="text" name="currently" placeholder="Currently">
        <input type="text" name="mood" placeholder="Mood">
        <button type="submit">Update Profile</button>
    </form>