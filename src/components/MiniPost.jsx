import React from "react";
import { Link } from "react-router-dom";
import "./MiniPost.scss";
import { getUserDate } from "../utils/createDate";
import { minutRead } from "../utils/minutRead";

function MiniPost({ idPost, title, text, img, tag, postDate, user }) {
  const truncateLengthTitle = 120;
  const truncatedTitle =
    title.length > truncateLengthTitle
      ? title.substring(0, truncateLengthTitle) + "..."
      : title;

  return (
    <>
      <div className='mini-post'>
        <Link className='card__link' to={`/fullpost/${idPost}`}>
          <div className='mini-post__img'>
            <img src={img} alt='post-img' />
          </div>
          <div className='mini-post__content'>
            <p className='mini-post__title'>{truncatedTitle}</p>
            <div className='data-post'>
              {/* <p className='post-data mini-text'>{getUserDate(postDate)}</p> */}
              <p className='post-tag mini-text'>{tag}</p>
              <p className='mini-text'>{minutRead(text)}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MiniPost;
