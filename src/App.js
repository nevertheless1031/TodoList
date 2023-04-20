import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const todoText = document.querySelector('#todo-input').value;
    setTodos([...todos, todoText]);
  };

  return (
    <div>     
    <div className="App">
      <div className="input-container">
        <input id="todo-input" type="text" />
        <button onClick={addTodo}>추가하기</button>
      </div>
      <h1>Todo List</h1>
      <div className="todos-container">
        {todos.map((todo, index) => (
          <div className="todo-item" key={index}>
            {todo}
          </div>
        ))}
      </div>
    </div>
    </div> 
  );
}

export default App;
