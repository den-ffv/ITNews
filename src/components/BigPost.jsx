import React from "react";
import { Link } from "react-router-dom";
import "./BigPost.scss";
import hill from "../img/react.jpeg";
function Catr() {
  return (
    <>
      <div className='card'>
        <Link className='card__link' to='/fullpost'>
          <div className='card__img'>
            <img className='img' src={hill} alt='' />
          </div>
          <div className='card__content'>
            <p className='post-tag mini-text'>react</p>
            <h2 className='card__title title-big'>
              З чого почати вивченни React js
            </h2>
            <div>
              <p className='author-post mini-text'>Lni Ohalo</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Catr;
