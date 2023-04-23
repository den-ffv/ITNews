import React from "react";
import { useDispatch ,useSelector } from "react-redux";
import "./FullPost.scss";
import { getUserDate } from "../utils/createDate";
import { fetchAuthMe } from "../redux/slices/auth";
import { fetchRemovePost } from "../redux/slices/posts";
import { useNavigate } from 'react-router-dom';

function FullPost({ title, text, img, tag, postData, userName, idPost }) {
  const user = useSelector((fetchAuthMe) => fetchAuthMe.auth.data);
  const isAdmin = user && user.role === 'admin';
  const navigate = useNavigate()
  console.log(isAdmin)
  console.log(idPost)

  const disparch = useDispatch()
  const onClickRemove = () => {
    if(window.confirm("Ви дійсно хочете видалити?")){
      disparch(fetchRemovePost(idPost))
      navigate("/")
    }
  }
  const onClickEdit = () => {
    navigate(`/add-post/${idPost}/edit`)
  }

  return (
    <>
      <div className='full-post__wrapper'>
        <p className='mini-text'>{getUserDate(postData)}</p>
        <p className='mini-text'>{tag}</p>
        <h1 className='full-post__title title'>{title}</h1>
        {!img ? "" : <img className='full-post__img' src={img} alt='img' />}
        <div className='text'>{text}</div>
        {/* <p>{userName}</p> */}
        {isAdmin ? (
          <>
            <button onClick={onClickRemove}>delete</button>
            <br></br>
            <button onClick={onClickEdit}>create</button>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default FullPost;
