import'./task.css'
function task() {
    let input = document.getElementById("taskInput");
    let taskName = input.value.trim();
    if (taskName === "") {
        alert("Please enter a task");
        console.log(task)
    }
    task.push({
        name: taskName,
        completed: false
    });
    input.value = "";
    displayTasks();
}
function displayTasks() {
    let list = document.getElementById("taskList");
    let showCompleted =
        document.getElementById("showCompleted").checked;

    task.forEach(function(task, index) {
        if (task.completed && !showCompleted) {
            return;
        }

        let li = document.createElement("li");
        li.textContent = task.name + " ";

        let statusBtn = document.createElement("button");
        statusBtn.textContent =
            task.completed ? "Completed" : "Status";

        statusBtn.onclick = function() {
            task.completed = !task.completed;
            displayTasks();
        };

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.onclick = function() {
            task.splice(index, 1);
            displayTasks();
        };

        li.appendChild(statusBtn);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });

    document.getElementById("total").textContent =
        "| Total: " + task.length;
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

function showHelp() {
    alert("Enter a task and click Add Task. Use Status to complete a task and Delete to remove it.");
}
export default task