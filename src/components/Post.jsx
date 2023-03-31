import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Post.scss";
import greec from "../img/nodejs.png";
function Post() {
  return (
    <>
      <div className='post-card'>
        <div className='post-card__img'>
          <img src={greec} alt='' />
        </div>
        <div className='post-card__content'>
          <Link className='card__link' to='/fullpost'>
            <p className='post-tag mini-text'>nodejs</p>
            <h2 className='post-card__title title'>
              Переваги NodeJs в програмування серверної частини
            </h2>
            <div>
              <p className='author-post mini-text'>Oliver</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Post;
