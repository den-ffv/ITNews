import React, { useState, useEffect } from "react";

import "../style/Profile.scss";
import userImg from "../img/user.png";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../redux/slices/auth";
import { fetchAuthMe } from "../redux/slices/auth";

import { useNavigate } from "react-router-dom";
import PreLoader from "../components/PreLoader";

function Profile() {
  const histori = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector((fetchAuthMe) => fetchAuthMe.auth.data);
  const isAdmin = user && user.role;

  useEffect(() => {
    if (isAdmin) {
      console.log(isAdmin);
    }
  }, [isAdmin]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const dispatch = useDispatch();
  const onClickLogout = () => {
    if (window.confirm("Ви справді хочете вийти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
      histori("/");
    }
  };
  if (window.localStorage.getItem("token") && isLoading) {
    return <PreLoader text={"Uncatch"} />;
  }

  return (
    <>
      <div className='profile'>
        <div className='profile__warpper'>
          <div className='wrapper profile__header'>
            <h1 className='profile__title'>Мiй Аккаунт</h1>
            <button onClick={onClickLogout} className='exid-btn'>
              Вихiд
            </button>
            {isAdmin ? <button>add post</button> : ""}
          </div>
          <div className='profile__user'>
            <div className='wrapper'>
              <div className='profile__content'>
                {user.avatarUrl ? (
                  <img
                    className='profile__user-img'
                    src={user.avatarUrl}
                    alt='user-img'
                  />
                ) : (
                  <img
                    className='profile__user-img'
                    src={userImg}
                    alt='user-img'
                  />
                )}

                <p className='profile__user-name'>{user.fullName}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='wrapper'>
          {/* тут будуть пости цього автора або вподобані пости */}
        </div>
      </div>
    </>
  );
}
export default Profile;
