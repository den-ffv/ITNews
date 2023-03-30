import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
import hill from "../img/hill.jpeg";
import like from "../img/love.svg";
function Catr() {
  return (
    <>
      <div className='card'>
        <div className='card__img'>
          <img className='img' src={hill} alt='' />
        </div>
        <div className='card__content'>
          <p className='card__date-post'>20.03.2023</p>
          <Link className='card__link' to='/fullpost'>
            <h2 className='card__title title-big'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h2>
            <p className='card__text text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              soluta odit doloremque error eum maxime consequuntur nam
              architecto odio tenetur inventore quidem, magni suscipit, dolor
              recusandae magnam in fugit...
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Catr;
