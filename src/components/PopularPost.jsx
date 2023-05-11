import React from "react";
import "./PopularPost.scss";
import { Link } from "react-router-dom";
import { getUserDate } from "../utils/createDate";
import {minutRead} from "../utils/minutRead"
function PopularPost({idPost, title, text, img, tag, postDate, user }) {
  // const truncateLengthTitle = 35; 
  // const truncatedTitle = title.length > truncateLengthTitle ? title.substring(0, truncateLengthTitle) + "...": title;
  return (
    <>
        <Link className='card__link' to={`/fullpost/${idPost}`}>
      <div className='populare-post'>
          <div className='populare-post__img'>
            <img src={img} alt='' />
          </div>
          <div className='populare-post__content'>
            <p className='populare-post__title title'>{title}</p>
            <p className='post-tag mini-text'>{tag}</p>

          </div>
      </div>
        </Link>
    </>
  );
}

export default PopularPost;
