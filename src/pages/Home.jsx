import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../axios";
import MiniPost from "../components/MiniPost";
import "../style/pages.scss";
import { fetchPosts } from "../redux/slices/posts";
import PreLoader from "../components/PreLoader";

function Home() {
  // const url = "http://localhost:3001/posts";
  // const [articles, setArticles] = useState([]);
  const dispatch = useDispatch();
  const {posts, tags} = useSelector(state => state.posts)

  const isPostsLoading = posts.status === "loading"

  useEffect(() => {
    dispatch(fetchPosts())
  }, []);

  console.log(posts)

  return (
    <>
      <div className='home__wrapper wrapper'>
      
        <div className='carts'>
        {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) => isPostsLoading ? (
          <PreLoader/>
        ): (

          <MiniPost
          idPost={obj._id}
          key={obj._id}
          title={obj.title}
          text={obj.text}
          img={obj.imgeUrl}
          tag={obj.tags}
          postDate={obj.createdAt}
          user={obj.user.fullName}
        />
        ))}
          {/* {articles
            .slice(0)
            .reverse()
            .map((article) => {
              return (
                <MiniPost
                  // idPost={article._id}
                  // key={article._id}
                  // title={article.title}
                  // text={article.text}
                  // img={article.imgeUrl}
                  // tag={article.tags}
                  // postDate={article.createdAt}
                  // user={article.user.fullName}
                />
              );
            })} */}
        </div>
      </div>
    </>
  );
}

export default Home;
