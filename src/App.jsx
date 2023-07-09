import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./style/reset.scss";
import "./App.scss";
import Header from "./components/Header";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
import ForgotPass from "./pages/ForgotPass";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import Profile from "./pages/Profile";
import FullPostPage from "./pages/FullPostPage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";
import AddPost from "./pages/AddPost";
import Category from "./pages/Category";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      <div className='App'>
        <Header />
        <main className='main '>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='//:fullpost/:id' element={<FullPostPage />} />
            <Route path='/category/:tag' element={<Category />} />
            {/* <Route path='/category/news' element={<News/>} /> */}
            {/* <Route path='/category/ideas' element={<Category/>} /> */}
            {/* <Route path='/category/science' element={<Science/>} /> */}
            <Route path='/user' element={<Profile />} />
            <Route path='/add-post/:id/edit' element={<AddPost />} />
            <Route path='/add-post' element={<AddPost />} />
            <Route path='/login' element={<Login />} />
            <Route path='/singup' element={<Singup />} />
            <Route path='/login/forgotpass' element={<ForgotPass />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
