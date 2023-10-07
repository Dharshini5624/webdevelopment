document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    // Add task
    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                ${taskText}
                <button class="delete">Delete</button>
            `;

            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    // Delete task
    taskList.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove();
        }
    });
});
