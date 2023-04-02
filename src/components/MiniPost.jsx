import React from "react";
import { Link } from "react-router-dom";
import "./MiniPost.scss";
import { getUserDate } from "../utils/createDate";

function MiniPost({ idPost, title, text, img, tag, postDate, user }) {
  const truncateLengthText = 180;
  const truncatedText = text.length > truncateLengthText ? text.substring(0, truncateLengthText) + "...": text;
  const truncateLengthTitle = 120; 
  const truncatedTitle = title.length > truncateLengthTitle ? title.substring(0, truncateLengthTitle) + "...": title;

  return (
    <>
      <div className='mini-post'>
        <Link className='card__link' to={`/fullpost/${idPost}`}>
          <div className='mini-post__img'>
            <img src={img} alt='' />
          </div>
          <div className='mini-post__content'>
            <p className='post-tag mini-text'>{tag}</p>
            <p className='mini-post__title'>
              {truncatedTitle}
            </p>
            <p className='mini-post__text text'>{truncatedText}</p>
            <div className='data-post'>
              <p className='post-data mini-text'>{getUserDate(postDate)}</p>
              <p className='author-post mini-text'>{user}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MiniPost;
