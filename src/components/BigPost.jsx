import React from "react";
import { Link } from "react-router-dom";
import "./BigPost.scss";
import { getUserDate } from '../utils/createDate';
import {minutRead} from "../utils/minutRead"
function Catr({ idPost, title, text, img, tag, postDate, reade }) {
    // const truncateLengthText = 380;
    // const truncatedText = text.length > truncateLengthText ? text.substring(0, truncateLengthText) + "...": text;
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
            <div className="mini-text-content">
              <p className='mini-text'>{getUserDate(postDate)}</p>
              <p className='mini-text'>{minutRead(text)}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Catr;
