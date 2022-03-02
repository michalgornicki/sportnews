import React, { useState, useEffect } from "react";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "./1.jpg";

function App() {
  const [Posts, setPosts] = useState();
  const [Photos, setPhotos] = useState();

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => setPosts(json));

    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((json) => setPhotos(json));

  return (
    <p>
      <div className="d-flex flex-wrap justify-content-between w-75 m-auto">
        {Posts ? (
          Posts.map((item) => (
            <div className="post">
              <img className="post__image" src={Photos[]} alt="" />
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
