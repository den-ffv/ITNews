import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

function Menu({ items, active, setActive }) {
  return (
    <>
      <div className={active ? 'menu active': 'menu'}>
        <div onClick={() => setActive(false)}>
          {items.map((i, index) => (
            <li className='menu__list'  key={index}>
              <Link className='menu__link' to={i.href}>{i.value}</Link>
            </li>
          ))}
          <div className='auth menu__auth'>
            <li className='menu__list' >
              <Link className='menu__link'  to='/login'>
                Login
              </Link>
            </li>
            <li className='menu__list'>
              <Link  className='menu__link' to='/singup'>
                Sing Up
              </Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
