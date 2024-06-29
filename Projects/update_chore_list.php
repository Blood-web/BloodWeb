<?php
// Load existing chore list
$choreFile = 'chore_list.txt';
$choreList = file_exists($choreFile) ? file($choreFile, FILE_IGNORE_NEW_LINES) : [];

// Parse chore list and extract chore name and priority
$parsedChoreList = [];
foreach ($choreList as $choreLine) {
    preg_match('/^Priority (\d+): (.+)$/', $choreLine, $matches);
    if (count($matches) === 3) {
        $choreName = $matches[2];
        $priority = $matches[1];
        $parsedChoreList[] = ['name' => $choreName, 'priority' => $priority];
    }
}

// Return parsed chore list as JSON response
header('Content-Type: application/json');
echo json_encode($parsedChoreList);
?>
