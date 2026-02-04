import React, { useState } from "react";
import "./todo.css";

function Todo() {
  let [task, setTask] = useState("");
  let [todos, setTodos] = useState([]);
  let [editIndex, setEditIndex] = useState(null);

  let addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  let editTodo = (index) => {
    setTask(todos[index]);
    setEditIndex(index);
  };

  let updateTodo = () => {
    if (task.trim() === "") return;

    let updatedTodos = todos.map((todo, index) =>
      index === editIndex ? task : todo
    );

    setTodos(updatedTodos);
    setTask("");
    setEditIndex(null);
  };

  let deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todolist">
      <div className="header">
        <h2>Todo List</h2>
      </div>

      <div className="todoname">
        <input className="inp" type="text" placeholder="Add a task" value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        {editIndex === null ? (
          <button onClick={addTodo} className="add-btn">
            Add
          </button>
        ) : (
          <button onClick={updateTodo} className="add-btn">
            Update
          </button>
        )}
      </div>

      <div className="listitem">
        <ul>
          {todos.map((todo, index) => (
            <li className="list" key={index}>
              <span>{todo}</span>
              <div className="btns">
                <button onClick={() => editTodo(index)} className="edit-btn">
                  Edit
                </button>
                <button onClick={() => deleteTodo(index)} className="dlt-btn">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
