import React from "react";
import { Link } from "react-router-dom";
import "./PostCard.scss";

import like from "../img/love.svg";
import greec from "../img/greec.jpg"
function PostCard() {
  return (
    <>
      <div className='post-card'>
        <div className='post-card__img'>
          <img src={greec} alt='' />
        </div>
        <div className='post-card__content'>
          <p className='card__date-post'>20.03.2023</p>
          <Link className='card__link' to='/fullpost'>
            <h2 className='post-card__title title'>
              тут просто текс sectetur adipisicing elit.
            </h2>
            <p className='post-card__text text'>
              тут просто Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              soluta odit doloremque error eum maxime consequuntur...
            </p>
          </Link>
          <div className='post-card__reactions'>
            <div>
              <p className='post-card__views'>90 views</p>
              <p className='post-card__comments'>0 comments</p>
            </div>
            <div >
              <p className='post-card__like'>3 <img onClick={function(){ console.log(this)}} src={like} alt="" /></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostCard;
