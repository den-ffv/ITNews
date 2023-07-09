import React from "react";
import { useSelector } from "react-redux";
import { selectIsAuth, fetchRegister } from "../redux/slices/auth";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import PreLoader from "../components/PreLoader";

function Singup() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const { register, handleSubmit, setError, formState: { errors, isValid },} = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  if (isAuth) {
    return (
      <>
        <PreLoader />
        <Navigate to='/' />
      </>
    );
  }

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));
    if (!data.payload) {
      return alert("не вдалось зареєструватися");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  return (
    <>
      <div>
        <section className='autorization'>
          <div className='autorization-continer container'>
            <div className='autorization-stylization-circles-two'></div>
            <div className='autorization-block'>
              <div className='autorization-block__title'>
                Створіть обліковий запис
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='autorization-box'>
                  <input
                    type='text'
                    id='fname'
                    name='fname'
                    className='autorization__box-input'
                    required
                    placeholder="Ім'я"
                    {...register("fullName", { required: "Укажіть і'мя" })}
                  />
                  <span className='autorization__box-text'></span>
                  <div className='error-message'>
                    {errors.fullName?.message}
                  </div>
                </div>
                <div className='autorization-box'>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='autorization__box-input'
                    required
                    placeholder='Почта'
                    pattern='[^\s@]+@[^\s@]+\.[^\s@]+'
                    {...register("email", { required: "Укажіть пошту" })}
                  />
                  <span className='autorization__box-text'></span>
                  <div className='error-message'>{errors.email?.message}</div>
                </div>
                <div className='autorization-box'>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    className='autorization__box-input'
                    required
                    placeholder='Пароль'
                    {...register("password", { required: "Укажіть пароль" })}
                  />
                  <span className='autorization__box-text'></span>
                  <div className='error-message'>
                    {errors.password?.message}
                  </div>
                </div>
                <button className='button-autorization button-autorization__margin'>
                  увійти
                </button>
              </form>
              {/* <div className='selection-entrance'>
                <p className='selection-entrance__text selection-entrance__text-grey'>
                  Відправляючи форму, ви погоджуєтеся з тим, що
                  <a href='#' className='selection-entrance__subtext'>
                    {" "}
                    Умови використання{" ,"}
                  </a>
                  <a href='#' className='selection-entrance__subtext'>
                    {" "}
                    Політика конфіденційності
                  </a>
                </p>
              </div>
              <div className='selection-entrance__password'></div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Singup;
