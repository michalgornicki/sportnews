import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
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
    <>
      <div className="w-75 d-flex flex-wrap justify-content-between m-auto pt-5">
        {Posts && Photos ? (
          Posts.map((item, id) => (
            <div className="post">
            <Link className="link" to={"/posts/" + item.id}>

              <img className="post__image" src={Photos[id].url} alt="" />
              <div className="post__title">{item.title}</div>
              <div className="post__body">{item.body}</div>
            </div>
          ))
        ) : (
          <div className="post__loading">ładowanie</div>
        )}
      </div>
    </>
  );
}

export default Home;
