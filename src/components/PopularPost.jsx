import React from "react";
import "./PopularPost.scss";
import { Link } from "react-router-dom";
import { getUserDate } from "../utils/createDate";
import { minutRead } from "../utils/minutRead";
import view from "../img/view-black.png";
function PopularPost({ idPost, title, text, img, tag, postDate, user, views }) {
<<<<<<< HEAD
  return (
    <div>
        <Link className='card__link' to={`/fullpost/${idPost}`}>
=======
  // const truncateLengthTitle = 35;
  // const truncatedTitle = title.length > truncateLengthTitle ? title.substring(0, truncateLengthTitle) + "...": title;
  return (
    <>
>>>>>>> main
      <div className='populare-post'>
        <Link className='card__link' to={`/fullpost/${idPost}`}>
          <div className='populare-post__img'>
            <img src={img} alt='post-img' />
          </div>
          <div className='populare-post__content'>
<<<<<<< HEAD
            <p className='populare-post__title title'>{title}</p>
            <div className='data-post'>
              <p className='post-tag mini-text'>{tag}</p>
              <p className='mini-text'>
                <img src={view} alt='view' />
=======
           
              <p className='populare-post__title title'>{title}</p>
           
            <div>
              <p className='post-tag mini-text'>{tag}</p>
              <p className='post-tag mini-text'>
                <img src={view} alt='img' />
>>>>>>> main
                {views}
              </p>
            </div>
          </div>
        </Link>
<<<<<<< HEAD
    </div>
=======
      </div>
    </>
>>>>>>> main
  );
}

export default PopularPost;
