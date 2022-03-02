import React, { useState, useEffect } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Home from "./components/Home.jsx";
import Post from "./components/Post.jsx";

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
        <Navbar className="navbar py-4" bg="white" expand="lg">
          <Container className="w-75 m-auto">
            <Navbar.Brand className="px-3" href="#home">
              Sport News
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#link">FOOTBALL</Nav.Link>
                <Nav.Link href="#link">TENNIS</Nav.Link>
                <Nav.Link href="#link">BASKETBALL</Nav.Link>
                <Nav.Link href="#link">CHESS</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Post" element={<Post />} />
        </Routes>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Post" element={<Post />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
