import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "../axios";
import MiniPost from "../components/MiniPost";
import "../style/pages.scss";
import { fetchPosts } from "../redux/slices/posts";
import PreLoader from "../components/PreLoader";
import Post from "../components/Post";
import BigPost from "../components/BigPost";
// import Search from "../components/Search";
// import "../components/Search.scss";
// import search from "../img/search.png";
import PopularPost from "../components/PopularPost";

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
  // console.log(posts.items)
  const popularPosts = [...posts.items].sort(
    (a, b) => b.viewsCount - a.viewsCount
  );
  // console.log(popularPosts)

  if (isLoading) {
    return <PreLoader />;
  }
  return (
    <>
      <div className='home__wrapper wrapper'>
        <>
          <div className='cards__wrapper'>
            <div className='cards-new'>
              <div className='carts'>
                {posts.items.slice(1, 3).map((obj) => (
                  <MiniPost
                    key={obj._id}
                    idPost={obj._id}
                    title={obj.title}
                    text={obj.text}
                    img={
                      obj.imgeUrl ? `http://localhost:3001${obj.imgeUrl}` : ""
                    }
                    tag={obj.tags}
                    postDate={obj.createdAt}
                    user={obj.user.fullName}
                  />
                ))}
              </div>
              <div className='carts'>
                {posts.items.slice(0, 1).map((obj) => (
                  <BigPost
                    key={obj._id}
                    idPost={obj._id}
                    title={obj.title}
                    text={obj.text}
                    img={
                      obj.imgeUrl ? `http://localhost:3001${obj.imgeUrl}` : ""
                    }
                    tag={obj.tags}
                    postDate={obj.createdAt}
                    user={obj.user.fullName}
                  />
                ))}
              </div>
            </div>
            <div className='carts cards-popular'>
              {popularPosts.slice(0, 5).map((obj) => (
                <PopularPost
                  key={obj._id}
                  idPost={obj._id}
                  title={obj.title}
                  // text={obj.text}
                  img={obj.imgeUrl ? `http://localhost:3001${obj.imgeUrl}` : ""}
                  tag={obj.tags}
                  // postDate={obj.createdAt}
                  // user={obj.user.fullName}
                />
              ))}
            </div>
          </div>
          <div>
            {posts.items.slice(3).map((obj, index) => (
              <Post
                key={obj._id}
                idPost={obj._id}
                title={obj.title}
                text={obj.text}
                img={obj.imgeUrl ? `http://localhost:3001${obj.imgeUrl}` : ""}
                tag={obj.tags}
                postDate={obj.createdAt}
              />
            ))}
          </div>
        </>
      </div>
    </>
  );
}

export default Home;
