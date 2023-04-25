import React from "react";
import { Link } from "react-router-dom";
import "./BigPost.scss";
import { getUserDate } from '../utils/createDate';
function Catr({ idPost, title, text, img, tag, postDate, reade }) {
    const truncateLengthText = 380;
    const truncatedText = text.length > truncateLengthText ? text.substring(0, truncateLengthText) + "...": text;
  return (
    <>
      <div className='card'>
        <Link className='card__link' to={`/fullpost/${idPost}`}>
          <div className='card__img'>
            <img className='img' src={img} alt='' />
          </div>
          <div className='card__content'>
            <p className='post-tag mini-text'>{tag}</p>
            <h2 className='card__title title-big'>
              {title}
            </h2>
            <p className="text big-post__text">{truncatedText}</p>
            <div>
              <p className='author-post mini-text'>{getUserDate(postDate)}</p>
              <p className='author-post mini-text'>{}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Catr;
