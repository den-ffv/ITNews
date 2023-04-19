import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../axios";
import MiniPost from "../components/MiniPost";
import "../style/pages.scss";
import { fetchPosts } from "../redux/slices/posts";
import PreLoader from "../components/PreLoader";

function Home() {
  const dispatch = useDispatch();
  const {posts, tags} = useSelector(state => state.posts)
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchPosts())
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className='home__wrapper wrapper'>
        <div className='carts'>
        {(isLoading ? [...Array(5)] : posts.items).map((obj, index) => isLoading ? (
           <PreLoader key={index} text={'Uncatch'}/> 
        ): (
          <MiniPost
          key={obj._id}
          idPost={obj._id}
          title={obj.title}
          // text={obj.text}
          img={obj.imgeUrl ? `http://localhost:3001${obj.imgeUrl}` : ''}
          tag={obj.tags}
          postDate={obj.createdAt}
          user={obj.user.fullName}
        />
        ))}
        </div>
      </div>
    </>
  );
}

export default Home;
