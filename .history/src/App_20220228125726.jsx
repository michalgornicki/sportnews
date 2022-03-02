import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [Posts, setPosts]

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))

  return (
    <p>
      Cleanedup React App
    </p>
  );
}

export default App;
