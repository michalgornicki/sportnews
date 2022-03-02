import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Home = (props) => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <>
      <div className="section d-flex flex-wrap justify-content-between m-auto pt-5">
        {props.Posts && props.Photos ? (
          props.Posts.map((item, id) => (
            <div className="post post--hover">
            <Link className="link" to={"/posts/" + item.id}>

              <img className="post__image" src={props.Photos[id].url} alt="" loading="lazy" />
              <div className="post__title">{item.title}</div>
            </Link>

            </div>
          ))
        ) : (
          <div className="post__loading">Loading</div>
        )}
      </div>
    </>
  );
}

export default Home;
