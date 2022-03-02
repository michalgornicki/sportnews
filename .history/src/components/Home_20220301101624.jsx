import React, { useState, useEffect } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";

function App() {
  const [Posts, setPosts] = useState();
  const [Photos, setPhotos] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setPhotos(json));
  }, []);

  return (
    <Router>
      <>
          {Posts && Photos ? (
            Posts.map((item, id) => (
              <div className="post">
                <img className="post__image" src={Photos[id].url} alt="" />
                <div className="post__title">{item.title}</div>
                <div className="post__body">{item.body}</div>
              </div>
            ))
          ) : (
            <div className="post__loading">ładowanie</div>
          )}
      </>
    </Router>
  );
}

export default App;
