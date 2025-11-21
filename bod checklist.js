document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // 1. Create the new list item element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // 2. Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';

        // 3. Add event listener to delete the task
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        // 4. Add event listener to toggle task completion (clicking the task text)
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });
        
        // Prevent toggling completion when clicking the delete button itself
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();
        });


        // 5. Append the delete button to the list item
        listItem.appendChild(deleteButton);

        // 6. Append the new list item to the main task list
        taskList.appendChild(listItem);

        // 7. Clear the input field
        taskInput.value = '';
    }

    // Event listeners
    // Add task when the "Add" button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when the "Enter" key is pressed in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});