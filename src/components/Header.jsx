import React from "react";
import { useState } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
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
    { value: "Home", href: "/" },
    { value: "News", href: "/category/news" },
    { value: "Ideas", href: "/category/ideas" },
    { value: "Science", href: "/category/science" },
    { value: "Search", href: "/search" },
  ];

  const isAuth = useSelector(selectIsAuth);

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
              <Link className='logo' to='/'>
                <img src={logo} alt='' />
                <p>Uncatch</p>
              </Link>
            </div>
            <div className='header__nav'>
              <ul className='header__ul'>
                {items.slice(0, 4).map((item, index) => (
                  <li key={index}>
                    <NavLink className='header__link' to={item.href}>
                      {item.value}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className='right-menu-warpper'>
              {!isAuth ? (
                <div
                  className='header__auth'
                  onClick={() => setMenuActive(false)}
                >
                  <Link className='login auth' to='/login'>
                    Sign in
                  </Link>
                  <Link className='sing_up auth button' to='/singup'>
                    Registration
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

              <Link className='search-link' to='/search'>
                <img className='search-img' src={search} alt='' />
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
