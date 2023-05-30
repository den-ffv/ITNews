import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


import axios from "../axios";
import { fetchAuthMe, selectIsAuth } from "../redux/slices/auth";
import { fetchRemovePost } from "../redux/slices/posts";
import { getUserDate } from "../utils/createDate";
import { minutReadFullPost } from "../utils/minutRead";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import view from "../img/view.svg";
import twitter from "../img/twitter.svg";
import facebook from "../img/facebook.svg";
import linkedin from "../img/linkedin.svg";
import saveOn from "../img/save-on.png";
import saveOff from "../img/save-off.png";
import "./FullPost.scss";
function FullPost({ title, text, img, tag, postData, userName, idPost, views}) {
  const navigate = useNavigate();
  const disparch = useDispatch();
  const user = useSelector((fetchAuthMe) => fetchAuthMe.auth.data);
  const isAdmin = user && user.role === "admin";
  const onClickRemove = () => {
    if (window.confirm("Ви дійсно хочете видалити?")) {
      disparch(fetchRemovePost(idPost));
      navigate("/");
    }
  };
  const onClickEdit = () => {
    navigate(`/add-post/${idPost}/edit`);
  };


  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    checkPostSavedStatus();
  }, [idPost]);

  const checkPostSavedStatus = async () => {
    try {
      const savedPosts = JSON.parse(localStorage.getItem("savedPosts")) || [];
      setIsSaved(savedPosts.includes(idPost));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSavePost = async () => {
    try {
      if (window.localStorage.getItem('token') && user) {
        if (isSaved) {
          await axios.delete(`/posts/${idPost}/remove`);
          removePostFromLocalStorage(idPost);
          setIsSaved(false);
        } else {
          await axios.post(`/posts/${idPost}/save`);
          savePostToLocalStorage(idPost);
          setIsSaved(true);
        }
      } else {
        const history = useNavigate();
        history('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const savePostToLocalStorage = (postId) => {
    const savedPosts = JSON.parse(localStorage.getItem("savedPosts")) || [];
    savedPosts.push(postId);
    localStorage.setItem("savedPosts", JSON.stringify(savedPosts));
  };

  const removePostFromLocalStorage = (postId) => {
    const savedPosts = JSON.parse(localStorage.getItem("savedPosts")) || [];
    const updatedSavedPosts = savedPosts.filter((id) => id !== postId);
    localStorage.setItem("savedPosts", JSON.stringify(updatedSavedPosts));
  };

  return (
    <>
      <div className='full-post__wrapper'>
          <Link to={`/category/${tag}`} className='full-post__tags'>
            {tag}
          </Link>
          <h1 className='full-post__title title'>{title}</h1>
          {!img ? "" : <img className='full-post__img' src={img} alt='img' />}
        <div className='text-conteiner'>
          <div>
            <div className='data-conteiner'>
              <p className='mini-text'>{getUserDate(postData)}</p>
              <p className='mini-text'>{minutReadFullPost(text)}</p>
              <div className='view-conteiner'>
                <img className='img-view' src={view} alt='view' />
                <p className='mini-text'>{views}</p>
              </div>
            </div>

            <div className='share-content'>
              <button className='likn-social-maras' onClick={handleSavePost}>
                {isSaved ? (
                  <img src={saveOn} alt='cancel' />
                ) : (
                  <img src={saveOff} alt='save' />
                )}
              </button>
              <div className='likn-social-maras'>
                <FacebookShareButton url={'https://uncatch.vercel.app'} title={title}>
                  <img src={facebook} alt='facebook' />
                </FacebookShareButton>
              </div>
              <div className='likn-social-maras'>
                <TwitterShareButton url={`https://uncatch.vercel.app`} title={title}>
                  <img src={twitter} alt='twitter' />
                </TwitterShareButton>
              </div>
              <div className='likn-social-maras'>
                <LinkedinShareButton url={'https://uncatch.vercel.app'} title={title}>
                  <img src={linkedin} alt='linkedin' />
                </LinkedinShareButton>
              </div>
            </div>
          </div>
          <div className='full-post__text'>{text}</div>
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
