import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.scss";
function Header() {
  return (
    <>
      <div className='header'>
        <div className='wrapper'>
          <div className='header__wrapper'>
            <div className='header__logo'>
              <Link className='logo' to='/'>
                ITNews
              </Link>
            </div>
            <div className='header__nav'>
              <ul className='header__ul'>
                <li>
                  <Link className='header__link' to='/'>
                    Головна
                  </Link>
                </li>
                <li>
                  <Link className='header__link' to=''>
                    Новини
                  </Link>
                </li>
                <li>
                  <Link className='header__link' to=''>
                    Блог
                  </Link>
                </li>
                <li>
                  <Link className='header__link' to=''>
                    Мови
                  </Link>
                </li>
              </ul>
            </div>
            <div className='header__auth'>
              <Link className='login auth' to='/login'>
                Login
              </Link>
              <Link className='sing_up auth' to='/singup'>
                Sing Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
