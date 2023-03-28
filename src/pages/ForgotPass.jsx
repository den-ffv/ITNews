import React from "react";

function ForgotPass() {
  return (
    <>
      <form action="#" >
        <section className="autorization">
          <div className="autorization-continer container">
            <div className="autorization-block">
              <div className="autorization-block__title">Забули пароль?</div>
              <div className="autorization-block__subtitle">
                Введіть адресу електронної пошти, яку ви використовували для
                реєстрації в ITNews, і ми надішлемо вам посилання для
                відновлення паролю.
              </div>
              <form action="./login" method="POST">
                <div className="autorization-box">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="autorization__box-input"
                    required
                    placeholder="Почта"
                  />
                  <div className="error-message"></div>
                </div>
                <button className="button-autorization button-autorization__margin">
                  увійти
                </button>
              </form>
              <div className="selection-entrance">
                <p className="selection-entrance__text selection-entrance__text-grey">
                  Відправляючи форму, ви погоджуєтеся з тим, що
                </p>
              </div>
              <div className="selection-entrance__password">
                <a href="#" className="selection-entrance__subtext">
                  Умови використання{" "}
                </a>
                <a href="#" className="selection-entrance__subtext">
                  {" "}
                  Політика конфіденційності
                </a>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}

export default ForgotPass;
