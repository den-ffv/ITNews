import React from 'react'

function Singup() {
  return (
    <>
    <form action="#" className="autorization">
       
       <section >
         <div className="autorization-continer container">
             <div className="autorization-block">
                 <div className="autorization-block__title">
                     Створіть обліковий запис
                 </div>
                 <form action="/login" method="POST">
                     <div className="autorization-box">
                         <input type="text" id="fname" name="fname" className="autorization__box-input" required placeholder="Ім'я"/>
                         <span className="autorization__box-text"></span>
                         <div className="error-message"></div>
                     </div>
                     <div className="autorization-box">
                         <input type="text" id="lname" name="lname" className="autorization__box-input" required placeholder="Прізвище"/>
                         <span className="autorization__box-text"></span>
                         <div className="error-message"></div>
                     </div>
                     <div className="autorization-box">
                         <input type="email" id="email" name="email" className="autorization__box-input" required placeholder="Почта"
                             pattern="[^\s@]+@[^\s@]+\.[^\s@]+"/>
                         <span className="autorization__box-text"></span>
                         <div className="error-message"></div>
                     </div>
                     <div className="autorization-box">
                         <input type="password" id="password" name="password" className="autorization__box-input"
                             required placeholder="Пароль"/>
                         <span className="autorization__box-text"></span>
                         <div className="error-message"></div>
                     </div>
                     <button className="button-autorization button-autorization__margin">увійти</button>
                 </form>
                 <div className="selection-entrance">
                     <p className="selection-entrance__text selection-entrance__text-grey">Відправляючи форму, ви
                         погоджуєтеся з тим, що</p>
                 </div>
                 <div className="selection-entrance__password">
                     <a href="#" className="selection-entrance__subtext">Умови використання </a>
                     <a href="#" className="selection-entrance__subtext"> Політика конфіденційності</a>
                 </div>
             </div>
         </div>
     </section>
     
     </form>
    </>
  )
}

export default Singup