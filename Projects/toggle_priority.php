<?php
// Read JSON input from the client
$json_input = file_get_contents('php://input');
$data = json_decode($json_input, true);

// Check if chore_to_toggle and direction parameters are present
if (isset($data['chore_to_toggle'], $data['direction'])) {
    // Read the chore name and direction from the JSON data
    $chore_to_toggle = $data['chore_to_toggle'];
    $direction = $data['direction'];

    // Read the chore list from the text file
    $chore_list_file = 'chore_list.txt';
    $chore_list_content = file_get_contents($chore_list_file);
    $chore_list = explode("\n", $chore_list_content);

    // Find the chore in the list and update its priority
    foreach ($chore_list as &$chore_item) {
        // Split the chore item into priority and chore name
        $chore_parts = explode(': ', $chore_item, 2);
        if (count($chore_parts) == 2) {
            $priority_string= $chore_parts[0];
            $priority = intval(substr($priority_string, strlen("Priority "))); // Extract and convert to integer
            $chore_name = trim($chore_parts[1]);
            

            if ($chore_name === $chore_to_toggle) {
                // Debugging: Display the current priority and chore name
                error_log('Current priority: ' . $priority);
                error_log('Current chore name: ' . $chore_name);

                // Update the priority based on the direction
                if ($direction === 'up') {
                    $priority = max(1, $priority - 1);
                } else if ($direction === 'down') {
                    // Assuming priority range is 1-5, change this if needed
                    $priority = min(5, $priority + 1);
                }

                // Update the chore item with updated priority
                $chore_item = "Priority $priority: $chore_name";

                // Debugging: Display the updated priority
                error_log('Updated priority: ' . $priority);
            }
        }
    }

    // Write the updated chore list back to the text file
    $updated_chore_list_content = implode("\n", $chore_list);
    file_put_contents($chore_list_file, $updated_chore_list_content);

    // Prepare the response
    $response = [
        'success' => true,
        'message' => 'Chore priority updated successfully.',
        'updated_chore_list' => $chore_list, // Optionally send back the updated list
    ];
} else {
    // Missing parameter error response
    $response = [
        'success' => false,
        'error' => 'Missing chore_to_toggle or direction parameter.',
    ];
}

// Send JSON response to the client
header('Content-Type: application/json');
echo json_encode($response);
