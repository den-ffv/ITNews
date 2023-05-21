import React from "react";
import "./PopularPost.scss";
import { Link } from "react-router-dom";
import { getUserDate } from "../utils/createDate";
import { minutRead } from "../utils/minutRead";
import view from "../img/view-black.png";
function PopularPost({ idPost, title, text, img, tag, postDate, user, views }) {
  return (
    <div>
        <Link className='card__link' to={`/fullpost/${idPost}`}>
      <div className='populare-post'>
          <div className='populare-post__img'>
            <img src={img} alt='post-img' />
          </div>
          <div className='populare-post__content'>
            <p className='populare-post__title title'>{title}</p>
            <div className='data-post'>
              <p className='post-tag mini-text'>{tag}</p>
              <p className='mini-text'>
                <img src={view} alt='view' />
                {views}
              </p>
            </div>
          </div>
      </div>
        </Link>
    </div>
  );
}

export default PopularPost;
