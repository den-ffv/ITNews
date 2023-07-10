import React from "react";
import { Link, Navigate } from "react-router-dom";
import Singup from "./Singup";
// import ForgotPass from "./ForgotPass";
import "../style/auth.scss";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAuth, selectIsAuth } from "../redux/slices/auth";
import Loading from "../components/Loading";
function Login() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "seimon@email.com",
      password: "123456789",
    },
    mode: "onChange",
  });
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    if (!data.payload) {
      return alert("не вдалось авторизуватися");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };
  if (isAuth) {
    return (
      <>
        <Loading />
        <Navigate to='/' />
      </>
    );
  }

  return (
    <>
      <div>
        <section className='autorization'>
          <div className='autorization-continer container'>
            <div className='autorization-stylization-circles'></div>
            <div className='autorization-block'>
              <div className='autorization-block__title'>Ласкаво просимо</div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='autorization-box'>
                  <input
                    type='email'
                    id='login'
                    name='login'
                    className='autorization__box-input'
                    // required
                    placeholder='Логин'
                    {...register("email", { required: "Укажіть пошту" })}
                  />
                  <div className='error-message'>
                    <p>{errors.email?.message}</p>
                  </div>
                </div>
                <div className='autorization-box'>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    className='autorization__box-input'
                    // required
                    placeholder='Пароль'
                    {...register("password", { required: "Укажіть пароль" })}
                  />
                  <div className='error-message'>
                    <p>{errors.password?.message}</p>
                  </div>
                </div>
                <button className='button-autorization button-autorization__margin'>
                  увійти
                </button>
              </form>
              <div className='selection-entrance'>
                <p className='selection-entrance__text'>
                  Не маю облікового запису
                </p>
                <Link to='/singup' className='selection-entrance__subtext'>
                  Зареєструватися
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
