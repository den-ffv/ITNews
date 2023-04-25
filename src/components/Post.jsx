import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Post.scss";
import { getUserDate } from '../utils/createDate';
function Post({ idPost, title, text, img, tag, postDate, user }) {
  return (
    <>
      <div className='post-card'>
        <div className='post-card__img'>
          <img src={img} alt='' />
        </div>
        <div className='post-card__content'>
          <Link className='card__link' to={`/fullpost/${idPost}`}>
            <p className='post-tag mini-text'>{tag}</p>
            <h2 className='post-card__title title'>
              {title}
            </h2>
            <div>
              <p className='author-post mini-text'>{getUserDate(postDate)}</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Post;
