import React, { useState, useEffect } from "react";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [Posts, setPosts] = useState();

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => setPosts(json));

  return (
    <p>
      <div className="d-flex flex-wrap">
        {Posts ? (
          Posts.map((item) => (
            <div className="post p-3">
              <img className="post__image">/>
              <img className="post__image" src="" alt="" />
              <div className="post__title">{item.title}</div>
              <div className="post__body">{item.body}</div>
            </div>
          ))
        ) : (
          <div className="post__loading">ładowanie</div>
        )}
      </div>
    </p>
  );
}

export default App;
