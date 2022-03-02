import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [Posts, setPosts] = useState()

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => setPosts(json))

  return (
    <p>
      {if PoPosts.map(item => item.title)}
    </p>
  );
}

export default App;
