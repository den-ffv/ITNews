import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./MiniPost.scss";
import { getUserDate } from "../utils/createDate";
import { minutRead } from "../utils/minutRead";
import axios from "../axios";
import saveOn from "../img/save-on.png";
function SavePost({ idPost, title, text, img, tag, postDate, user, deletePost, isDeleting }) {
  const truncateLengthTitle = 120;
  const truncatedTitle = title.length > truncateLengthTitle ? title.substring(0, truncateLengthTitle) + "..." : title;
  
  const postClassName = `${isDeleting ? 'seved-post' : ''}`;
  return (
    <div className={postClassName}>
      <div className='mini-post'>
        <Link className='card__link' to={`/fullpost/${idPost}`}>
          <div className='mini-post__img'>
            <img src={img} alt='' />
          </div>
          <div className='mini-post__content'>
            <p className='mini-post__title'>{truncatedTitle}</p>
            {/* <p className='mini-post__text text'>{truncatedText text}</p> */}
            <div className='data-post'>
              {/* <p className='post-data mini-text'>{getUserDate(postDate)}</p> */}
              <p className='post-tag mini-text'>{tag}</p>
              <p className='mini-text'>{minutRead(text)}</p>
            </div>
          </div>
        </Link>
        <div className='save-post-content'>
          <button className='save-post-button' onClick={deletePost}>
            <img className='save-post-button__img' src={saveOn} alt='cancel' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SavePost;
