import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout, selectIsAuth } from "../redux/slices/auth";
import { Navigate } from "react-router-dom";
function Menu({ items, active, setActive }) {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const onClickLogout = () => {
    if (window.confirm("Ви справді хочете вийти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };
  return (
    <>
      <div className={active ? "menu active" : "menu"}>
        <div onClick={() => setActive(false)}>
          {items.map((i, index) => (
            <li className='menu__list' key={index}>
              <Link className='menu__link' to={i.href}>
                {i.value}
              </Link>
            </li>
          ))}
          <div className='menu__auth'>
            {(isAuth) ? (
              <li className='menu__list'>
                <Link onClick={onClickLogout} className='menu__link'>
                  Вихiд
                </Link>
              </li>
            ) : (
              <div>
                <li className='menu__list'>
                  <Link className='menu__link' to='/login'>
                    Login
                  </Link>
                </li>
                <li className='menu__list'>
                  <Link className='menu__link' to='/singup'>
                    Sing Up
                  </Link>
                </li>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
