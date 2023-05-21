import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Post.scss";
import { getUserDate } from "../utils/createDate";
import { minutRead } from "../utils/minutRead";
function Post({ idPost, title, text, img, tag, postDate, user }) {
  return (
    <Link className='card__link' to={`/fullpost/${idPost}`}>
      <div className='post-card'>
        <div className='post-card__img'>
          <img src={img} alt='' />
        </div>
        <div className='post-card__content'>
          <div>
            <h2 className='post-card__title title'>{title}</h2>
          </div>
          <div className='data-post'>
            {/* <p className='mini-text'>{getUserDate(postDate)}</p> */}
            <p className='post-tag mini-text'>{tag}</p>
            <p className='mini-text'>{minutRead(text)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Post;
