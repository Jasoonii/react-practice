import './App.css';
import { useState } from 'react'
import { Task } from "./Task"

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  /* Makes a new list composed of the old list and the new task
  sets todolist to the new list */
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id +1,
      taskName: newTask,
      completed: false,
    }

    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
  };

  /* Function filters through each task in list. If task id is not
    = to the id passed into deleteFunction, its added to new list */
  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      return task.id !== id;
    });

    setTodoList(newTodoList);
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  /* handleChange function takes event from input field.
  Uses the input to run setNewTask function */
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <div className="App">

      <div className="addTasks">
        <input  onChange={handleChange} />
        <button onClick={addTask} >Add Task</button>
      </div> {/* addTasks */}

      <div className="list">
        {todoList.map((task) => {

          return <Task
           taskName={task.taskName} 
           id={task.id}
           deleteTask={deleteTask}
           completeTask={completeTask}
           completed={task.completed}
           />

        })}
      </div> {/* List */}

    </div> //App
  );
}

export default App;
