<?php
// Check if chore to delete is received
if (isset($_POST['chore_to_delete'])) {
    $choreToDelete = $_POST['chore_to_delete'];

    // Load existing chore list
    $choreFile = 'chore_list.txt';
    $choreList = file_exists($choreFile) ? file($choreFile, FILE_IGNORE_NEW_LINES) : [];

    // Remove the chore from the list
    $updatedChoreList = array_filter($choreList, function($choreLine) use ($choreToDelete) {
        return stripos($choreLine, $choreToDelete) === false;
    });

    // Save the updated chore list
    if (file_put_contents($choreFile, implode("\n", $updatedChoreList)) !== false) {
        // Return updated chore list as JSON response
        header('Content-Type: application/json');
        echo json_encode($updatedChoreList);
    } else {
        http_response_code(500); // Internal server error if file write fails
        echo json_encode(['error' => 'Failed to write to file']);
    }
} else {
    http_response_code(400); // Bad request if chore to delete is not provided
    echo json_encode(['error' => 'Invalid request']);
}
?>

