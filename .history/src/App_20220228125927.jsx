import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [Posts, setPosts] = useState()

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => setPosts(json))
  .then(console.log(Posts))

  return (
    <p>
    </p>
  );
}

export default App;
