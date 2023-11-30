// project3.js

// Function to add a new task
function addTask() {
    // Get input values
    var taskInput = document.getElementById('taskInput');
    var dueDateInput = document.getElementById('dueDate');

    // Validate input
    if (taskInput.value === '' || dueDateInput.value === '') {
        alert('Please enter both task and due date.');
        return;
    }

    // Create a new row in the table
    var table = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    // Insert cells into the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    // Populate cells with input values
    cell1.innerHTML = taskInput.value;
    cell2.innerHTML = dueDateInput.value;

    // Add "Complete" button in the third cell
    var completeButton = document.createElement('button');
    completeButton.innerHTML = 'Complete';
    completeButton.onclick = function () {
        completeTask(newRow);
    };
    cell3.appendChild(completeButton);

    // Clear input fields
    taskInput.value = '';
    dueDateInput.value = '';
}

// Function to mark a task as complete
function completeTask(row) {
    row.classList.toggle('completed');
}

// You might want to add more functionalities like deleting tasks, storing tasks in localStorage, etc.

// Initial setup: you can add some example tasks
addTask(); // Add a task on page load for testing
