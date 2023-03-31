import React from "react";
import { Link } from "react-router-dom";
import "./MiniPost.scss";
import car from "../img/chatgpt.jpg";
function MiniPost() {
  return (
    <>
      <div className='mini-post'>
        <Link className='card__link' to='/fullpost'>
          <div className='mini-post__img'>
            <img src={car} alt='' />
          </div>
          <div className='mini-post__content'>
            <p className='post-tag mini-text'>IT</p>
            <p className='mini-post__title'>
              Chat-GPT як його використовувати та його репеваги
            </p>

            <p className='author-post mini-text'>WIRED STAFF</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MiniPost;
