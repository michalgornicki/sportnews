import React from 'react';
import './App.css';

function App() {

  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

  return (
    <p>
      Cleanedup React App
    </p>
  );
}

export default App;
