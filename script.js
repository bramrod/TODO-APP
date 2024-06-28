document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    window.addTask = function () {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Wey, escribe una tarea boludo.');
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="deleteTask(this)">Borrar</button>
            <button onclick="completeTask(this)">Completar</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    };

    window.deleteTask = function (button) {
        const li = button.parentElement;
        taskList.removeChild(li);
    };

    window.completeTask = function (button) {
        const li = button.parentElement;
        li.classList.toggle('completed');
    };
});
