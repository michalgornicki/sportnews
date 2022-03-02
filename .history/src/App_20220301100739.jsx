import React, { useState, useEffect } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

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
    <>
      <Navbar className="navbar" bg="white" expand="lg">
        <Container className="w-75 m-auto">
          <Navbar.Brand className="pr-1" href="#home">Sport News</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">FOOTBALL</Nav.Link>
              <Nav.Link href="#link">TENNIS</Nav.Link>
              <Nav.Link href="#link">BASKETBALL</Nav.Link>
              <Nav.Link href="#link">CHESS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="w-75 d-flex flex-wrap justify-content-between m-auto pt-5">
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
      </div>
    </>
  );
}

export default App;
