import React from "react";
import Card from "../components/Card";
import PostCard from "../components/PostCard";
import "../style/pages.scss"
function Home() {
  return (
    <>
      <div className='home__wrapper wrapper'>
        <div className='carts'>
          <Card/>
        </div>
        <div className="posts">
          <PostCard/>
        </div>
      </div>
    </>
  );
}

export default Home;
