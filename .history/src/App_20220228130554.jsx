import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [Posts, setPosts] = useState();

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => setPosts(json));

  return <p>{Posts ? Posts.map((item) => 
    <>
    <div>{item.title}</div>
    <div>{item.body}</div>
    </>
    ) : <div>ładowanie</div>}</p>;
}

export default App;
