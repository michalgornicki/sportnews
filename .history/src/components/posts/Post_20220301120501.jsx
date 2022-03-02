import React, { useState, useEffect } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

function Post(props) {
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

  let { id } = useParams();


  return (
      <>

        <div className="w-75 d-flex flex-wrap justify-content-between m-auto pt-5">
          {Posts && Photos ? (
              <div className="post">
                <div className="post__title">User id is {id}</div>
                <div className="post__body">bbb</div>
              </div>
          ) : (
            <div className="post__loading">ładowanie</div>
          )}
        </div>
      </>
  );
}

export default App;
