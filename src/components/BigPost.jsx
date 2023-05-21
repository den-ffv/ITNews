import React from "react";
import { Link } from "react-router-dom";
import "./BigPost.scss";
import { getUserDate } from "../utils/createDate";
import { minutRead } from "../utils/minutRead";
function Catr({ idPost, title, text, img, tag, postDate, reade }) {

  return (
    <>
      <div className='card'>
        <Link className='card__link' to={`/fullpost/${idPost}`}>
          <div className='card__img'>
            <img className='img' src={img} alt='post-img' />
          </div>
          <div className='card__content'>
            <h2 className='card__title title-big'>{title}</h2>
            <div className='mini-text-content'>
              {/* <p className='mini-text'>{getUserDate(postDate)}</p> */}
              <p className='post-tag mini-text'>{tag}</p>
              <p className='mini-text'>{minutRead(text)}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Catr;
