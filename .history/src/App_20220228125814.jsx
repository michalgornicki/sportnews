import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [Posts, setPosts] = useState()

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => setPosts(json))
  .then()

  return (
    <p>
      Cleanedup React App
    </p>
  );
}

export default App;
