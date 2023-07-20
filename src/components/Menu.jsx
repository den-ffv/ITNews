import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout, selectIsAuth } from "../redux/slices/auth";
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
            {isAuth ? (
              <div>
                <li className='menu__list'>
                  <Link className='menu__link' to='/user'>
                    My account
                  </Link>
                </li>
                <li className='menu__list'>
                  <Link onClick={onClickLogout} className='menu__link'>
                    Exit
                  </Link>
                </li>
              </div>
            ) : (
              <div>
                <li className='menu__list'>
                  <Link className='menu__link' to='/login'>
                    Увійти
                  </Link>
                </li>
                <li className='menu__list'>
                  <Link className='menu__link' to='/singup'>
                    Реєстрація
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
