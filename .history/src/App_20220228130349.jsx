import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [Posts, setPosts] = useState()

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => setPosts(json))

  return (
    <p>
      {Posts ? Posts.map(item => item.title) : <div>ładowanie profilu</div>}
    </p>
  );
}

export default App;
