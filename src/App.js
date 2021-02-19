import React, { useState } from 'react';
import './App.css';
import Todotable from './components/Todotable';

function App() {
  const [desc, setDesc] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);
  
  const inputChanged = (event) => {
    setDesc({...desc, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, desc]);
    setDesc({description: '', date: ''});
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  return (
    <div>
      <h1 className="headerStyle">Simple Todolist</h1>
      <div className="inputStyle">
        <h4>Add todo:</h4>
        <form onSubmit={addTodo}>
          <label>Description: </label>
          <input type="text" name="description" onChange={inputChanged} value={desc.description}/>
          <label>Date: </label>
          <input type="text" name="date" onChange={inputChanged} value={desc.date}/>
          <input type="submit" value="Add"/>
        </form>
        <Todotable todos={todos} deleteTask={deleteTodo}/>
      </div>
    </div>
  );
};

export default App;
