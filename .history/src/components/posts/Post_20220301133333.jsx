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
      <div className="w-75 justify-content-between m-auto pt-5">
        {props.Posts && props.Photos ? (
          <div className="post">
            <div className="post__title">{props.Posts[id - 1].title}</div>
            <img className="post__image" src={props.Photos[id - 1].url} alt="" />
            <div className="post__body post__body--uppercase">{props.Posts[id - 1].body}</div>
          </div>
        ) : (
          <div className="post__loading">ładowanie</div>
        )}

        
        {props.Comments ? (
          props.Comments
          .filter((item) => item.postId === 1)
          .map((item) => (
            <div className="comment">
              <div className="comment__name">{item.name}</div>
              <div className="comment__body">{item.body}</div>
              <div className="comment__body">{item.body}</div>

            </div>
          ))
        ) : (
          <div className="post__loading">ładowanie</div>
        )}
      </div>
    </>
  );
}

export default Post;
