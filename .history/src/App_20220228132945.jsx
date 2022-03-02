import React, { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [Posts, setPosts] = useState();

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => setPosts(json));

  return (
    <p>
      {Posts ? (
        <div>
        Posts.map((item) => (
          <div className="post">
            <div className="post__title">{item.title}</div>
            <div className="post__body">{item.body}</div>
          </div>
        ))
        </div>) : (
        <div className="post__loading">ładowanie</div>
      )}
    </p>
  );
}

export default App;
