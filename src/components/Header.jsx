import React from "react";
import "./Header.scss";
function Header() {
  return (
    <>
      <div className="header">
        <div className="wrapper">
          <div className="header__wrapper">
            <div className="header__logo">
              <a className="logo" href="index.html">
                ITNews
              </a>
            </div>
            <div className="header__nav">
              <ul className="header__ul">
                <li>
                  <a className="header__link" href="index.html">
                    Головна
                  </a>
                </li>
                <li>
                  <a className="header__link" href="news.html">
                    Новини
                  </a>
                </li>
                <li>
                  <a className="header__link" href="blog.html">
                    Блог
                  </a>
                </li>
                <li>
                  <a className="header__link" href="language.html">
                    Мови
                  </a>
                </li>
              </ul>
            </div>
            <div className="header__auth">
              <a className="login auth" href="login.html">
                Login
              </a>
              <a className="sing_up auth" href="singup.html">
                Sing Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
