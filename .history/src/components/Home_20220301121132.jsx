import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {

  return (
    <>
      <div className="w-75 d-flex flex-wrap justify-content-between m-auto pt-5">
        {props.Posts && props.Photos ? (
          props.Posts.map((item, id) => (
            <div className="post">
            <Link className="link" to={"/posts/" + item.id}>

              <img className="post__image" src={props.Photos[id].url} alt="" />
              <div className="post__title">{item.title}</div>
            </Link>

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
