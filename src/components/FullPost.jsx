import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./FullPost.scss";
import { getUserDate } from "../utils/createDate";
import { minutReadFullPost } from "../utils/minutRead";
import { fetchAuthMe } from "../redux/slices/auth";
import { fetchRemovePost } from "../redux/slices/posts";
import { useNavigate } from "react-router-dom";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "react-share";

function FullPost({ title, text, img, tag, postData, userName, idPost }) {
 


  const user = useSelector((fetchAuthMe) => fetchAuthMe.auth.data);
  const isAdmin = user && user.role === "admin";
  const navigate = useNavigate();
  console.log(isAdmin);
  console.log(idPost);

  const disparch = useDispatch();
  const onClickRemove = () => {
    if (window.confirm("Ви дійсно хочете видалити?")) {
      disparch(fetchRemovePost(idPost));
      navigate("/");
    }
  };
  const onClickEdit = () => {
    navigate(`/add-post/${idPost}/edit`);
  };

  const shareUrl = "https://www.itbrew.com/"
  return (
    <>
      <div className='full-post__wrapper'>
        <p className='mini-text'>{tag}</p>
        <h1 className='full-post__title title'>{title}</h1>
        {!img ? "" : <img className='full-post__img' src={img} alt='img' />}
        <div className='text-conteiner'>
          <div className='data-conteiner'>
            <p className='mini-text'>{getUserDate(postData)}</p>
            <p className='mini-text'>{minutReadFullPost(text)}</p>
          </div>
          <div className='full-post__text'>{text}</div>

          <FacebookShareButton url={shareUrl} quote={title}>
            {/* <FacebookIcon size={32} round /> */}
            <p className="likn-social-maras button">Facebook</p>
          </FacebookShareButton>
     
          <TwitterShareButton url={shareUrl} title={title}>
            {/* <TwitterIcon size={32} round /> */}
            <p className="likn-social-maras button">Twitter</p>
          </TwitterShareButton>
       
          <LinkedinShareButton url={img} title={title}>
            <p className="likn-social-maras button">Linkedin</p>
          </LinkedinShareButton>
        </div>
        {/* <p>{userName}</p> */}
        {isAdmin ? (
          <>
            <div className='button-sabmit'>
              <button className='button' onClick={onClickRemove}>
                delete
              </button>
              <br></br>
              <button className='button' onClick={onClickEdit}>
                create
              </button>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default FullPost;
