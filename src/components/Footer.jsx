import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import twitter from "../img/twitter.svg";
import facebook from "../img/facebook.svg";
import linkedin from "../img/linkedin.svg";
import github from "../img/github.svg";
import instagram from "../img/instagram.svg";
import "./Footer.scss";
import { configureStore } from "@reduxjs/toolkit";
function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='wrapper footer__wrapper'>
          <div className='footer__nav'>

          <div className='footer__logo'>
            <Link className='logo' to='/'>
              <img src={logo} alt='logo' />
              <p>Uncatch</p>
            </Link>
          </div>
          {/* <div className='footer__nav'>
            <li>Store</li>
            <li>About</li>
            <li>Contact</li>
          </div> */}
          </div>
          <div className='social-networks'>
            <a className='social-networks__link' href='https://twitter.com/wwwofficial1'  target="_blank">
              <li>
                <img className='social-networks__img' src={twitter} alt='twitter' />
              </li>
            </a>
            <a className='social-networks__link' href='https://www.linkedin.com/in/bohdan-chokhlenko'  target="_blank">
              <li>
                <img className='social-networks__img' src={linkedin} alt='linkedin' />
              </li>
            </a>
            <a className='social-networks__link' href='https://facebook.com'  target="_blank">
              <li>
                <img className='social-networks__img' src={facebook} alt='facebook' />
              </li>
            </a>
            <a className='social-networks__link' href='https://github.com/den-ffv'  target="_blank">
              <li>
                <img className='social-networks__img' src={github} alt='github' />
              </li>
            </a>
            <a className='social-networks__link' href='https://instagram.com'  target="_blank">
              <li>
                <img className='social-networks__img' src={instagram} alt='instagram' />
              </li>
            </a>
          </div>
          <p>© Uncatch 2023 All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
