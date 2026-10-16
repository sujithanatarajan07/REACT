import React, { useEffect, useState } from "react";
import "./App.css";

function App() {

  // User information
  const [user, setUser] = useState(null);

  // Task input
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Medium");

  // Tasks
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Complete React Assignment",
      priority: "High",
      completed: false
    },
    {
      id: 2,
      name: "Learn JavaScript",
      priority: "Medium",
      completed: true
    },
    {
      id: 3,
      name: "Read HTML Notes",
      priority: "Low",
      completed: false
    }
  ]);

  // Dark mode
  const [darkMode, setDarkMode] = useState(false);


  // Fetch user information when page loads
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });

  }, []);


  // Add new task
  const addTask = () => {

    if (taskName.trim() === "") {
      alert("Please enter task name");
      return;
    }

    const newTask = {
      id: Date.now(),
      name: taskName,
      priority: priority,
      completed: false
    };

    setTasks([...tasks, newTask]);

    setTaskName("");
    setPriority("Medium");
  };


  // Delete task
  const deleteTask = (id) => {

    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  };


  // Mark task as completed
  const completeTask = (id) => {

    const updatedTasks = tasks.map((task) => {

      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  };


  // Total tasks
  const totalTasks = tasks.length;

  // Completed tasks
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  // Pending tasks
  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;


  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* Header */}
      <header>

        <div>
          <h1>Task Management Dashboard</h1>

          {user ? (
            <p>
              Welcome, <strong>{user.name}</strong> 👋
            </p>
          ) : (
            <p>Loading user...</p>
          )}
        </div>

        <button
          className="mode-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

      </header>


      {/* Profile */}
      {user && (
        <section className="profile">

          <h2>User Profile</h2>

          <p>
            <strong>Name:</strong> {user.name}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Phone:</strong> {user.phone}
          </p>

        </section>
      )}


      {/* Counters */}
      <section className="counters">

        <div className="counter">
          <h2>{totalTasks}</h2>
          <p>Total Tasks</p>
        </div>

        <div className="counter completed">
          <h2>{completedTasks}</h2>
          <p>Completed</p>
        </div>

        <div className="counter pending">
          <h2>{pendingTasks}</h2>
          <p>Pending</p>
        </div>

      </section>


      {/* Add Task */}
      <section className="add-task">

        <h2>Add New Task</h2>

        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <button onClick={addTask}>
          Add Task
        </button>

      </section>


      {/* Task List */}
      <section className="task-section">

        <h2>My Tasks</h2>

        {tasks.length === 0 ? (

          <p>No tasks available.</p>

        ) : (

          <div className="task-list">

            {tasks.map((task) => (

              <div
                key={task.id}
                className={`task-card ${task.priority.toLowerCase()}`}
              >

                <div>

                  <h3
                    className={
                      task.completed
                        ? "task-completed"
                        : ""
                    }
                  >
                    {task.name}
                  </h3>

                  <span className="priority">
                    {task.priority}
                  </span>

                </div>


                <div className="task-buttons">

                  <button
                    onClick={() => completeTask(task.id)}
                  >
                    {task.completed
                      ? "Undo"
                      : "Complete"}
                  </button>

                  <button
                    className="delete"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

    </div>
  );
}

export default App;