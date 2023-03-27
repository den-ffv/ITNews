import { useState } from "react";
// import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import "./App.scss";
import "./style/reset.scss";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
import ForgotPass from "./pages/ForgotPass";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        {/* <Login/> */}
        {/* <Singup/> */}
        {/* <ForgotPass/> */}
        <main className="main">
          
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default App;
