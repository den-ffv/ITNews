import React from "react";
import { Link } from "react-router-dom";
import "./MiniPost.scss";
import car from "../img/chatgpt.jpg";
function MiniPost({ title, text, img, tag, postData }) {


    
  const truncateLengthText = 180;
  const truncatedText = text.length > truncateLengthText ? text.substring(0, truncateLengthText) + '...' : text;
  const truncateLengthTitle = 35;
  const truncatedTitle = title.length > truncateLengthTitle ? title.substring(0, truncateLengthTitle) + '...' : title;

// код для відображення дати створення поста 
function addZeroInDate(date){
  return (date < 10) ? date = '0' + date : date; 
}
const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

function getUserDate(t){
    t = new Date(postData)
    const month = months[t.getMonth()];
    const day = t.getDate();
    const formattedDate = `${month} ${day}, ${t.getFullYear()}`;
    // console.log(formattedDate); // "Березень 31, 2023"
    return formattedDate;
}


  return (
    <>
      <div className='mini-post'>
        <Link className='card__link' to='/fullpost'>
          <div className='mini-post__img'>
            <img src={img} alt='' />
          </div>
          <div className='mini-post__content'>
            <p className='post-tag mini-text'>{tag}</p>
            <p className='mini-post__title'>
              {/* Chat-GPT як його використовувати та його репеваги */}
              {truncatedTitle}
            </p>
            <p className='mini-post__text text'>
              {truncatedText}
            </p>
            <div className='data-post'>
            <p className="post-data mini-text">{getUserDate()}</p>
            <p className='author-post mini-text'>WIRED STAFF</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MiniPost;
