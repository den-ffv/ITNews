import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Singup from "./Singup";
import ForgotPass from "./ForgotPass";
import "../style/auth.scss";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAuth, selectIsAuth } from "../redux/slices/auth";
import PreLoader from "../components/PreLoader";
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
      email: "bo15fff@gmail.com",
      password: "123456789",
    },
    mode: "onChange",
  });

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
        <PreLoader text={'Uncatch'}/>
        <Navigate to='/' />
      </>
     )
  }

  return (
    <>
      <div>
        <section className='autorization'>
          <div className='autorization-continer container'>
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
                  <div className='error-message'>{errors.email?.message}</div>
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
                    {errors.password?.message}
                  </div>
                </div>
                <button className='button-autorization button-autorization__margin button'>
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
              <div className='selection-entrance__password'>
                <Link
                  to='/login/forgotpass'
                  className='selection-entrance__subtext'
                >
                  Забули пароль?
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Routes>
        <Route path='/singup' element={<Singup />} />
        <Route path='/login/forgotpass' element={<ForgotPass />} />
      </Routes>
    </>
  );
}

export default Login;
