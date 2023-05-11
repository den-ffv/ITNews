import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./FullPost.scss";
import { getUserDate } from "../utils/createDate";
import { minutReadFullPost } from "../utils/minutRead";
import { fetchAuthMe } from "../redux/slices/auth";
import { fetchRemovePost } from "../redux/slices/posts";
import { Link, useNavigate } from "react-router-dom";
import view from "../img/view.png";
import twitter from "../img/twitter.png";
import facebook from "../img/facebook.png";
import linkedin from "../img/linkedin.png";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "react-share";

function FullPost({
  title,
  text,
  img,
  tag,
  postData,
  userName,
  idPost,
  views,
}) {
  const user = useSelector((fetchAuthMe) => fetchAuthMe.auth.data);
  const isAdmin = user && user.role === "admin";
  const navigate = useNavigate();
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
  return (
    <>
      <div className='full-post__wrapper'>
        <Link to={`/category/${tag}`} className='mini-text'>
          {tag}
        </Link>
        <h1 className='full-post__title title'>{title}</h1>
        {!img ? "" : <img className='full-post__img' src={img} alt='img' />}
        <div className='text-conteiner'>
          <div className='data-conteiner'>
            <p className='mini-text'>{getUserDate(postData)}</p>
            <p className='mini-text'>{minutReadFullPost(text)}</p>
            <img className='img-view' src={view} alt='view' />
            <p className='mini-text'>{views}</p>
          </div>
          <div className='full-post__text'>{text}</div>

          <FacebookShareButton url={img} quote={title}>
            <img className='likn-social-maras' src={facebook} alt='' />
          </FacebookShareButton>

          <TwitterShareButton url={img} title={title}>
            <img className='likn-social-maras' src={twitter} alt='' />
          </TwitterShareButton>

          <LinkedinShareButton url={img} title={title}>
            <img className='likn-social-maras' src={linkedin} alt='' />
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
