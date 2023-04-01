import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.scss";
import Menu from "./Menu";
import profile from "../img/profile.png"
function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "Головна", href: "/" },
    { value: "Новини", href: "/news" },
    { value: "Блог", href: "/blog" },
    { value: "Мови", href: "/leng" },
  ];

  const isAurtnUser = false;

  return (
    <>
      <div className='header'>
        <div className='wrapper'>
          <div className='header__wrapper'>
            <div className='header__logo'>
              <div>
                <nav className='block-burger-menu'>
                  <div
                    className='burger-menu'
                    onClick={() => setMenuActive(!menuActive)}
                  >
                    <div
                      className={
                        !menuActive
                          ? "burger-bar unclicked"
                          : "burger-bar clicked"
                      }
                    ></div>
                    <div
                      className={
                        !menuActive
                          ? "burger-bar unclicked"
                          : "burger-bar clicked"
                      }
                    ></div>
                    <div
                      className={
                        !menuActive
                          ? "burger-bar unclicked"
                          : "burger-bar clicked"
                      }
                    ></div>
                  </div>
                </nav>
              </div>
              <div>
                <Link className='logo' to='/'>
                  ITNews
                </Link>
              </div>
            </div>
            <div className='header__nav'>
              <ul className='header__ul'>
                {items.map((item, index) => (
                  <li key={index}>
                    <Link className='header__link' to={item.href}>
                      {item.value}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {!isAurtnUser ? (
              <div
                className='header__auth'
                onClick={() => setMenuActive(false)}
              >
                <Link className='login auth auth' to='/login'>
                  Login
                </Link>
                <Link className='sing_up auth' to='/singup'>
                  Sing Up
                </Link>
              </div>
            ) : (
              
              <div className='user'>
                <Link to='/user'>
                  <dir><img src={profile} alt="" /></dir>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <Menu active={menuActive} setActive={setMenuActive} items={items} />
      <Outlet />
    </>
  );
}

export default Header;
