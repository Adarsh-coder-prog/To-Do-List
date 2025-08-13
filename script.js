function addTask(){
    const taskList = document.getElementById('taskList');
    const input = document.getElementById('inputTask');
    const taskValue = input.value.trim();

    if (!taskValue) return; // No empty tasks!

    // Create li
    const newTask = document.createElement('li');

    // Create span for text
    const textSpan = document.createElement('span');
    textSpan.textContent = taskValue;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.onclick = function() {
        newTask.remove();
    };

    // Append span and button
    newTask.appendChild(textSpan);
    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);

    // Clear input
    input.value = "";
}