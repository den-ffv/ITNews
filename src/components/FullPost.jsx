import React from "react";
import "./FullPost.scss";
import { getUserDate } from "../utils/createDate";
function FullPost({title, text, img, tag, postData }) {
  return (
    <>
      <div className='full-post__wrapper'>
        <p className='mini-text'>{getUserDate(postData)}</p>
        <p className='mini-text'>{tag}</p>
        <h1 className='full-post__title title'>{title}</h1>
        <img className='full-post__img' src={img} alt='' />
        <p className='text'>{text}</p>
      </div>
    </>
  );
}

export default FullPost;
