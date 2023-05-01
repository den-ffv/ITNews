import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Post.scss";
import { getUserDate } from "../utils/createDate";
import { minutRead } from "../utils/minutRead";
function Post({ idPost, title, text, img, tag, postDate, user }) {
  return (
    <div className="card__link">
        <Link className='card__link' to={`/fullpost/${idPost}`}>
      <div className='post-card'>
          <div className='post-card__img'>
            <img src={img} alt='' />
          </div>
          <div className='post-card__content'>
            <div>
              <p className='post-tag mini-text'>{tag}</p>
              <h2 className='post-card__title title'>{title}</h2>
            </div>

            <div className='mini-text-content'>
              <p className='author-post mini-text'>{getUserDate(postDate)}</p>
              <p className='author-post mini-text'>{minutRead(text)}</p>
            </div>
          </div>
      </div>
        </Link>
    </div>
  );
}

export default Post;
