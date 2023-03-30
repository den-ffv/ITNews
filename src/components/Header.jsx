import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.scss";
import Menu from "./Menu";
function Header() {
  const [ menuActive, setMenuActive] = useState(false)
  const items = [
    { value: "Головна", href: "/" },
    { value: "Новини", href: "/news" },
    { value: "Блог", href: "/blog" },
    { value: "Мови", href: "/leng" },
  ];


  return (
    <>
      <div className='header'>
        <div className='wrapper'>
          <div className='header__wrapper'>

            {/* <button onClick={() => setMenuActive(!menuActive)}>open</button> */}

          <nav>
            <div className="burger-menu" onClick={() => setMenuActive(!menuActive)}>
              <div className={!menuActive ? "burger-bar unclicked" : "burger-bar clicked"} ></div>
              <div className={!menuActive ? "burger-bar unclicked" : "burger-bar clicked"} ></div>
              <div className={!menuActive ? "burger-bar unclicked" : "burger-bar clicked"} ></div>
            </div>
          </nav>

            <div className='header__logo'>
              <Link className='logo' to='/'>
                ITNews
              </Link>
            </div>
            <div className='header__nav'>
              <ul className='header__ul'>
                {items.map((item, index) => 
                  <li key={index}>
                    <Link className='header__link' to={item.href}>
                      {item.value}
                    </Link>
                  </li>
                )}
                {/* <li>
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
                </li> */}
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
      <Menu active={menuActive} setActive={setMenuActive} items={items} />
      <Outlet />
    </>
  );
}

export default Header;
