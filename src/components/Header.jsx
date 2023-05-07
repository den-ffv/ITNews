import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.scss";
import Menu from "./Menu";
import profile from "../img/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../redux/slices/auth";
import search from "../img/search-blak.svg";

import logo from "../img/logo.svg";
function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "Головна", href: "/" },
    { value: "Новини", href: "/news" },
    { value: "Блог", href: "/blog" },
    { value: "Мови", href: "/leng" },
    { value: "Search", href: "/search-post" },
  ];

  const isAuth = useSelector(selectIsAuth);
  // const dispatch = useDispatch()
  // const onClickLogout = () => {
  //   if (window.confirm('Ви справді хочете вийти?')) {
  //     dispatch(logout())
  //     window.localStorage.removeItem("token")
  //   }
  // }

  return (
    <>
      <div className='header'>
        <div className='wrapper'>
          <div className='header__wrapper'>
            <nav className='block-burger-menu'>
              <div
                className='burger-menu'
                onClick={() => setMenuActive(!menuActive)}
              >
                <div
                  className={
                    !menuActive ? "burger-bar unclicked" : "burger-bar clicked"
                  }
                ></div>
                <div
                  className={
                    !menuActive ? "burger-bar unclicked" : "burger-bar clicked"
                  }
                ></div>
                <div
                  className={
                    !menuActive ? "burger-bar unclicked" : "burger-bar clicked"
                  }
                ></div>
              </div>
            </nav>

            <div className='header__logo'>
              {/* / */}

              <Link className='logo' to='/'>
                <img src={logo} alt='' />
                <p>Uncatch</p>
              </Link>

              {/*  */}
            </div>
            <div className='header__nav'>
              <ul className='header__ul'>
                {items.slice(0,4).map((item, index) => (
                  <li key={index}>
                    <Link className='header__link' to={item.href}>
                      {item.value}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="right-menu-warpper">
              {!isAuth ? (
                <div
                  className='header__auth'
                  onClick={() => setMenuActive(false)}
                >
                  <Link className='login auth' to='/login'>
                    Login
                  </Link>
                  <Link className='sing_up auth button' to='/singup'>
                    Sing Up
                  </Link>
                </div>
              ) : (
                <div className='user'>
                  <Link to='/user'>
                    <dir>
                      <img src={profile} alt='user-icon' />
                    </dir>
                  </Link>

                  {/* <button onClick={onClickLogout} className="sing_up ">Вихід</button> */}
                </div>
              )}

              <Link className="search-link" to='/search-post'>
                <img className="search-img" src={search} alt='' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Menu active={menuActive} setActive={setMenuActive} items={items} />
      <Outlet />
    </>
  );
}

export default Header;
