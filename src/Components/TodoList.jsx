import  { useState } from "react";

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState("");

  // Add a new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };
  // function addTask:
  //   if newTask.trim() is not empty:
  //       Create newTaskObject with text = newTask, completed = false
  //       Append newTaskObject to the tasks list
  //       Set tasks state to the updated list
  //       Clear newTask by setting it to an empty string

  // Toggle task completion
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // function toggleTaskCompletion(index):
  //   Initialize updatedTasks as an empty list
  //   For each task in tasks:
  //       If the current task's index matches the input index:
  //           Copy the task and toggle its completed status
  //           Add the modified task to updatedTasks
  //       Else:
  //           Add the original task to updatedTasks
  //   Update the tasks array with updatedTasks

  // Remove a task
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // function removeTask(index):
  //   Initialize updatedTasks as an empty list
  //   For each task in tasks:
  //       If the current task's index is not equal to the input index:
  //           Add the task to updatedTasks
  //   Update the tasks array with updatedTasks

  // Start editing a task
  const startEditing = (index) => {
    setEditingTaskIndex(index);
    setEditedTaskText(tasks[index].text); // Set the text of the task to be edited
  };
  // function startEditing(index):
  //   Set editingTaskIndex to index (store the index of the task to be edited)
  //   Retrieve the task at the given index from tasks
  //   Set editedTaskText to the text of the task (allow user to modify this text)


  // Save the edited task
  const saveTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: editedTaskText } : task
    );
    setTasks(updatedTasks);
    setEditingTaskIndex(null); // Stop editing
  };

  // function saveTask(index):
  //   Initialize updatedTasks as an empty list
  //   For each task in tasks:
  //       If the current task's index matches the input index:
  //           Copy the task and replace its text with editedTaskText
  //           Add the modified task to updatedTasks
  //       Else:
  //           Add the original task to updatedTasks
  //   Update the tasks array with updatedTasks
  //   Stop editing by setting editingTaskIndex to null

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">To-do List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-2 bg-gray-50 rounded-lg shadow-sm"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                  className="mr-2"
                />
                {editingTaskIndex === index ? (
                  // Show an input field if the task is being edited
                  <input
                    type="text"
                    className="text-lg border p-1"
                    value={editedTaskText}
                    onChange={(e) => setEditedTaskText(e.target.value)}
                  />
                ) : (
                  // Show the task text if not editing
                  <span
                    className={`text-lg ${task.completed ? "line-through text-gray-500" : ""}`}
                  >
                    {task.text}
                  </span>
                )}
              </div>
              <div className="flex">
                {editingTaskIndex === index ? (
                  // Show "Save" button if editing
                  <button
                    onClick={() => saveTask(index)}
                    className="text-green-500 hover:text-green-700 mr-2"
                  >
                    Save
                  </button>
                ) : (
                  // Show "Edit" button if not editing
                  <button
                    onClick={() => startEditing(index)}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => removeTask(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;
