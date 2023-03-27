import React from "react";
import "../style/auth.scss";

function Login() {
  return (
    <>
      <form action="#" className="autorization">
        <section>
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
                <a href="singup.html" className="selection-entrance__subtext">
                  Зареєструватися
                </a>
              </div>
              <div className="selection-entrance__password">
                <a
                  href="./forgotpass.html"
                  className="selection-entrance__subtext"
                >
                  Забули пароль?
                </a>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}

export default Login;
