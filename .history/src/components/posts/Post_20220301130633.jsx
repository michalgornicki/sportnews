import React, { useState, useEffect } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

function Post(props) {
  let { id } = useParams();

  return (
    <>
      <div className="w-75 d-flex flex-wrap justify-content-between m-auto pt-5">
        {props.Posts && props.Photos ? (
          <div className="post">
            <div className="post__title">{props.Posts[id - 1].title}</div>
            <img className="post__image" src={props.Photos[id - 1].url} alt="" />
            <div className="post__body post__body--uppercase">{props.Posts[id - 1].body}</div>
          </div>
        ) : (
          <div className="post__loading">ładowanie</div>
        )}

        {props.Comments
        .filter(item => item[id].userId === id )
        .map((item) => (
          <div>
            <div className="post__title">{item.title}</div>
            <div className="post__title">{item.body}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Post;
