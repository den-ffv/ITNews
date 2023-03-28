import React from "react";
import Card from "../components/Card";
import "../style/pages.scss"
function Home() {
  return (
    <>
      <div className='home__wrapper wrapper'>
        <div className='carts'>
          <Card/>

        </div>
      </div>
    </>
  );
}

export default Home;
