import React from "react";
import { useSelector } from "react-redux";
import { selectIsAuth, fetchRegister } from "../redux/slices/auth";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

function Singup() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
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
        <Loading />
        <Navigate to='/' />
      </>
    );
  }

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));
    if (!data.payload) {
      return alert("failed to register");
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
              <div className='autorization-block__title'>Create an account</div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='autorization-box'>
                  <input
                    type='text'
                    id='fname'
                    name='fname'
                    className='autorization__box-input'
                    required
                    placeholder='Name'
                    {...register("fullName", { required: "Enter your name" })}
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
                    placeholder='Email'
                    pattern='[^\s@]+@[^\s@]+\.[^\s@]+'
                    {...register("email", { required: "Enter your email" })}
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
                    placeholder='Password'
                    {...register("password", {
                      required: "Enter your password",
                    })}
                  />
                  <span className='autorization__box-text'></span>
                  <div className='error-message'>
                    {errors.password?.message}
                  </div>
                </div>
                <button className='button-autorization button-autorization__margin'>
                  log in
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Singup;
