document.addEventListener('DOMContentLoaded', () => {
    
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();

        
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

       
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';

       
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });
        
       
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();
        });


       
        listItem.appendChild(deleteButton);

        
        taskList.appendChild(listItem);

       
        taskInput.value = '';
    }

   
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
