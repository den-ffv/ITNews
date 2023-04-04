import React from "react";

import "../style/Profile.scss";
import userImg from "../img/user.png";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../redux/slices/auth";
import {fetchAuthMe} from "../redux/slices/auth";

import { useNavigate } from "react-router-dom";

function Profile() {
  const histori = useNavigate()
  const isAuth = useSelector(selectIsAuth);
  console.log(isAuth)
  const user = useSelector(fetchAuthMe => fetchAuthMe.auth.data);
  console.log(user )
 
      
  const dispatch = useDispatch();
  const onClickLogout = () => {
    if (window.confirm("Ви справді хочете вийти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
      histori("/");
    }
  };

  return (
    <>
      <div className="profile">
      <div className="profile__warpper">
        <div className="wrapper profile__header">
          <h1 className="profile__title">Мiй Аккаунт</h1>   
          <button onClick={onClickLogout} className='exid-btn'>Вихiд</button>
        </div>
        <div className="profile__user">
          <div className="wrapper">
            <div className="profile__content">
              {(user.avatarUrl) ? (
                <img className="profile__user-img" src={user.avatarUrl} alt="user-img" />
              ) : (
                <img className="profile__user-img" src={userImg} alt="user-img" />
              )}
              
              <p className="profile__user-name">{user.fullName}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        {/* тут будуть пости цього автора або вподобані пости */}
      </div>
    </div>
    </>
  );
}
export default Profile;
