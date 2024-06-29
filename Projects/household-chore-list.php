<!DOCTYPE html>
<html>
<head>
    <title>Household Chore List</title>
    <link type="text/css" rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Household Chore List</h1> <hr>
        <form id="addForm" method="post">
            <div>
                <input type="text" id="newChore" name="new_chore" placeholder="Input a new item" name="newChore" required>
            </div>
            <div>
                <input type="number" id="priority" name="priority" placeholder="Priority (1-5)" min="1" max="5" value="5">
            </div>
                
            <button type="submit" name="add_chore" id="addButton">Add Chore</button>
        </form>
        <!-- <div><p>edit</p><p>Priority</p><p>Task</p></div> -->
        <ul id="choreList">
            <!-- Chore items will be added dynamically here -->
        </ul>
    </div>
    <script type="text/javascript" src="http://www.jackewers.com/KeyFunctions.js"></script>
    <script>
        // Function to update chore list from server
        function updateChoreList() {
            fetch('update_chore_list.php')
                .then(response => response.json())
                .then(data => { // Create the internal structure of choreList
                    const choreList = document.getElementById('choreList');
                    choreList.innerHTML = ''; // clear old elements
                    data.forEach(chore => {
                        const listItem = createElement('li',{className:'chore-item priority_'+chore.priority});

                        // Priority button
                        const priorityButton = createElement('button',{textContent:'↑'});
                        priorityButton.addEventListener('click', function() {togglePriority(chore.name,'up');});
                        listItem.appendChild(priorityButton);

                        // Priority value
                        const priorityValue = createElement('span',{textContent:chore.priority,className:chore.priority});
                        listItem.appendChild(priorityValue);

                        // Down priority button
                        const downPriorityButton = createElement('button',{textContent:'↓'});
                        downPriorityButton.addEventListener('click', function() {togglePriority(chore.name, 'down');});
                        listItem.appendChild(downPriorityButton);

                        // Delete button
                        const deleteButton = createElement('button',{textContent:'Delete'});
                        deleteButton.addEventListener('click', function() {deleteChore(chore.name);});
                        listItem.appendChild(deleteButton);

                        // Chore name
                        const choreName = createElement('span',{textContent:chore.name});
                        listItem.appendChild(choreName);

                        // Apply priority class to list item based on priority value
                        // listItem.classList.add('priority_' + chore.priority);

                        choreList.appendChild(listItem);
                    });
                });
        }

        // Function to delete chore
        function deleteChore(choreName) {
            fetch('delete_chore.php', {
                method: 'POST',
                body: new URLSearchParams({ chore_to_delete: choreName }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(response => response.json())
            .then(data => {
                updateChoreList(); // Update chore list after deletion
            });
        } 

        // Function to toggle priority
       function togglePriority(choreName, direction) {
            console.log('Toggling Priority',choreName,direction)
            fetch('toggle_priority.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ chore_to_toggle: choreName, direction: direction }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Toggle priority response:', data,' Updating chorelist');
                updateChoreList(); // Update the chore list after priority is changed
            })
            .catch(error => {
                console.error('Toggle priority fetch error:', error);
            });
        }


        // Add chore form submission
        document.getElementById('addForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const newChoreInput = document.getElementById('newChore');
            const priorityInput = document.getElementById('priority');
            const newChore = newChoreInput.value.trim();
            const priority = priorityInput.value;
            if (newChore !== '' && priority >= 1 && priority <= 5) {
                fetch('add_chore.php', {
                    method: 'POST',
                    body: new URLSearchParams({ new_chore: newChore, priority: priority }),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(response => response.json())
                .then(data => {
                    newChoreInput.value = '';
                    priorityInput.value = 5;
                    updateChoreList();
                });
            }
        });

        // Polling to update chore list every 5 seconds
        setInterval(updateChoreList, 5000);
        updateChoreList(); // Initial update
    </script>
</body>
</html>
