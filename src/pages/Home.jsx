import React from "react";
import BigPost from "../components/BigPost";
import MiniPost from "../components/MiniPost";


import "../style/pages.scss";
function Home() {
  return (
    <>
      <div className='home__wrapper wrapper'>
        <div className='carts'>
          <div>
            <MiniPost />
            <MiniPost />
          </div>
          <BigPost />
        </div>
        <div className="carts-wrapper">
          <MiniPost/>
          <MiniPost/>
          <MiniPost/>
          <MiniPost/>
          <MiniPost/>
          <MiniPost/>
        </div>
        
        <div className='blok-posts'>
          <div className='posts'>
            
          </div>
          <div className='mini-posts'></div>
        </div>
      </div>
    </>
  );
}

export default Home;
