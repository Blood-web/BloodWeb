<?php

// Check if new chore data and priority are received
if (isset($_POST['new_chore']) && isset($_POST['priority'])) {
    $newChore = $_POST['new_chore'];
    $priority = $_POST['priority'];

    // Validate input (optional)
    if (empty($newChore) || !in_array($priority, range(1, 5))) {
        http_response_code(400); // Bad request if chore or priority is invalid
        echo json_encode(['error' => 'Invalid chore or priority']);
        exit;
    }

    // Load existing chore list
    $choreFile = 'chore_list.txt';
    $choreList = file_exists($choreFile) ? file($choreFile, FILE_IGNORE_NEW_LINES) : [];

    // Add the new chore with priority to the list
    $newChoreWithPriority = "Priority $priority: $newChore";
    array_unshift($choreList, $newChoreWithPriority);

    // Save the updated chore list
    if (file_put_contents($choreFile, implode("\n", $choreList)) !== false) {
        // Return updated chore list as JSON response
        header('Content-Type: application/json');
        echo json_encode($choreList);
    } else {
        http_response_code(500); // Internal server error if file write fails
        echo json_encode(['error' => 'Failed to write to file']);
    }
} else {
    http_response_code(400); // Bad request if new chore data or priority is not provided
    echo json_encode(['error' => 'Invalid request']);
}
?>
