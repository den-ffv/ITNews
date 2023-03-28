import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Singup from "./Singup";
import ForgotPass from "./ForgotPass";
import "../style/auth.scss";

function Login() {
  return (
    <>
      <form action="#">
        <section className="autorization">
          <div className="autorization-continer container">
            <div className="autorization-block">
              <div className="autorization-block__title">Ласкаво просимо</div>
              <form action="#" method="POST">
                <div className="autorization-box">
                  <input
                    type="text"
                    id="login"
                    name="login"
                    className="autorization__box-input"
                    required
                    placeholder="Логин"
                  />
                </div>
                <div className="autorization-box">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="autorization__box-input"
                    required
                    placeholder="Пароль"
                  />
                </div>
                <button className="button-autorization button-autorization__margin">
                  увійти
                </button>
              </form>
              <div className="selection-entrance">
                <p className="selection-entrance__text">
                  Не маю облікового запису
                </p>
                <Link to="/singup" className="selection-entrance__subtext">
                  Зареєструватися
                </Link>
              </div>
              <div className="selection-entrance__password">
                <Link
                  to="/login/forgotpass"
                  className="selection-entrance__subtext"
                >
                  Забули пароль?
                </Link>
              </div>
            </div>
          </div>
        </section>
      </form>
      <Routes>
        <Route path="/singup" element={<Singup/>}/>
        <Route path="/login/forgotpass" element={<ForgotPass/>}/>
      </Routes>
    </>
  );
}

export default Login;
