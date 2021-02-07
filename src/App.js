import React, { useState} from 'react';
import './App.css';

function App() {
  const [desc, setDesc] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);
  //github testaus

  const inputChanged = (event) => {
    setDesc({...desc, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, desc]);
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
      </div>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
          {todos.map((todo, index) => 
            <tr key={index}>
              <td>{todo.date}</td> 
              <td>{todo.description}</td>
              </tr>
            )}
        </tbody>
      </table>   
    </div>
  );
};

export default App;
