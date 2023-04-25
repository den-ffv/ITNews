import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../axios";
import MiniPost from "../components/MiniPost";
import "../style/pages.scss";
import { fetchPosts } from "../redux/slices/posts";
import PreLoader from "../components/PreLoader";
import Post from "../components/Post";
import BigPost from "../components/BigPost";

function Home() {
  const dispatch = useDispatch();
  const { posts, tags } = useSelector((state) => state.posts);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchPosts());
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className='home__wrapper wrapper'>
        <h1 className="main-titel">Сьогоднi</h1>
      <div className="cards__wrapper">
        <div className='carts'>
          {(isLoading ? [...Array(5)] : posts.items)
            .slice(0, 1)
            .map((obj) =>
              isLoading ? (
                <PreLoader />
              ) : (
                <BigPost
                  key={obj._id}
                  idPost={obj._id}
                  title={obj.title}
                  text={obj.text}
                  img={obj.imgeUrl ? `http://localhost:3001${obj.imgeUrl}` : ""}
                  tag={obj.tags}
                  postDate={obj.createdAt}
                  user={obj.user.fullName}
                />
              )
            )}
        </div>
        <div className='carts'>
          {(isLoading ? [...Array(5)] : posts.items)
            .slice(1, 3)
            .map((obj) =>
              isLoading ? (
                <PreLoader />
              ) : (
                <MiniPost
                  key={obj._id}
                  idPost={obj._id}
                  title={obj.title}
                  img={obj.imgeUrl ? `http://localhost:3001${obj.imgeUrl}` : ""}
                  tag={obj.tags}
                  postDate={obj.createdAt}
                  user={obj.user.fullName}
                />
              )
            )}
        </div>
      </div>
        <div>
          {(isLoading ? [...Array(5)] : posts.items)
            .slice(3)
            .map((obj, index) =>
              isLoading ? (
                <PreLoader key={index} text={"Uncatch"} />
              ) : (
                <Post
                  key={obj._id}
                  idPost={obj._id}
                  title={obj.title}
                  img={obj.imgeUrl ? `http://localhost:3001${obj.imgeUrl}` : ""}
                  tag={obj.tags}
                  postDate={obj.createdAt}
                  user={obj.user.fullName}
                />
              )
            )}
        </div>
      </div>
    </>
  );
}

export default Home;
