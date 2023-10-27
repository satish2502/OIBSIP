document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("task-form");
    const pendingList = document.getElementById("pending-list");
    const completedList = document.getElementById("completed-list");

    taskForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const taskName = document.getElementById("task-name").value;
        const taskDescription = document.getElementById("task-description").value;

        if (taskName) {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span>${taskName}</span>
                <span>${taskDescription}</span>
                <span>${new Date().toLocaleString()}</span>
                <button class="complete-button">Complete</button>
                <button class="delete-button">Delete</button>
            `;

            taskItem.querySelector(".complete-button").addEventListener("click", function() {
                taskItem.classList.add("completed");
                completedList.appendChild(taskItem);
            });

            taskItem.querySelector(".delete-button").addEventListener("click", function() {
                taskItem.remove();
            });

            pendingList.appendChild(taskItem);

            document.getElementById("task-name").value = "";
            document.getElementById("task-description").value = "";
        }
    });
});
