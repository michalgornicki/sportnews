import React, { useState, useEffect } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Post(props) {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  let { id } = useParams();

  return (
    <>
      <div className="w-75 justify-content-between m-auto pt-5">
        {props.Posts && props.Photos ? (
          <div className="post">
            <img className="post__image" src={props.Photos[id - 1].url} alt="" />
            <div className="post__title">{props.Posts[id - 1].title}</div>
            <div className="post__body post__body--uppercase">{props.Posts[id - 1].body}</div>
          </div>
        ) : (
          <div className="post__loading">ładowanie</div>
        )}


        <div className="input d-flex flex-column">
        <input className="input__field" type="text" name="comment" placeholder="Add your comment..." />
        <Button className="input__button w-25 my-2" variant="primary">Send</Button>
        </div>

        {props.Comments ? (
          props.Comments.filter((item) => item.postId === 1).map((item) => (
            <div className="comment">
              <div className="comment__username">{item.name}</div>
              <div className="comment__body">{item.body}</div>
              <div className="d-flex w-25 justify-content-evenly">
                <div className="comment__button">Like</div>
                <div className="comment__button">Answer</div>
              </div>
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
