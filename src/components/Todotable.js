import React from 'react';

export default function Todotable(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
          {props.todos.map((todo, index) => 
            <tr key={index}>
              <td>{todo.date}</td> 
              <td>{todo.description}</td>
              <td><button onClick={() => props.deleteTask(index)}>Delete</button></td>
            </tr>
            )}
        </tbody>
      </table>   

    </div>
  );
}