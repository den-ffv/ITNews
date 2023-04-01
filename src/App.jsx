import { useState } from "react";
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

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <main className='main '>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/news' element={<News/>} />
              <Route path='/user' element={<Profile/>} />
              <Route path='/login' element={<Login />} />
              <Route path='/singup' element={<Singup />} />
              <Route path="/login/forgotpass" element={<ForgotPass/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
