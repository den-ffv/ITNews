import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchTags } from "../redux/slices/posts";
import { Link } from "react-router-dom";
import axios from "../axios";
import "../style/pages.scss";
import MiniPost from "../components/MiniPost";
import PreLoader from "../components/PreLoader";
import Post from "../components/Post";
import BigPost from "../components/BigPost";
import PopularPost from "../components/PopularPost";

function Home() {
  const dispatch = useDispatch();
  const { posts, tags } = useSelector((state) => state.posts);
  const [isLoading, setLoading] = useState(true);

  const popularPosts = [...posts.items].sort(
    (a, b) => b.viewsCount - a.viewsCount
  );
  const uniqueTags = [...new Set(posts.items.flatMap((post) => post.tags))];

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const handleLoadMore = () => {
    setPostsPerPage(postsPerPage + 6);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.items.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) {
    return <PreLoader />;
  }
  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <div className='home__wrapper wrapper'>
          <div className='cards-new-and-populer-wrappper'>
            <div className='cards-new'>
              <p className='cards-header-text'>нові</p>
              <div className='carts'>
                {posts.items.slice(1, 3).map((obj) => (
                  <MiniPost
                    key={obj._id}
                    idPost={obj._id}
                    title={obj.title}
                    text={obj.text}
                    img={
                      obj.imgeUrl
                        ? `https://uncatch-api.onrender.com${obj.imgeUrl}`
                        : ""
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
                      obj.imgeUrl
                        ? `https://uncatch-api.onrender.com${obj.imgeUrl}`
                        : ""
                    }
                    tag={obj.tags}
                    postDate={obj.createdAt}
                    user={obj.user.fullName}
                  />
                ))}
              </div>
            </div>
            <div className='carts cards-popular'>
              <p className='cards-header-text'>популярна</p>
              {popularPosts.slice(0, 4).map((obj) => (
                <PopularPost
                  key={obj._id}
                  idPost={obj._id}
                  title={obj.title}
                  // text={obj.text}
                  img={
                    obj.imgeUrl
                      ? `https://uncatch-api.onrender.com${obj.imgeUrl}`
                      : ""
                  }
                  tag={obj.tags}
                  views={obj.viewsCount}
                  // user={obj.user.fullName}
                />
              ))}
            </div>
          </div>
          <div className='cards__wrapper cards-all__wrapper'>
            <div className='cards-all'>
              <p className='cards-header-text'>всі публікації</p>
              {currentPosts.slice(3).map((obj, index) => (
                <Post
                  key={obj._id}
                  idPost={obj._id}
                  title={obj.title}
                  text={obj.text}
                  img={
                    obj.imgeUrl
                      ? `https://uncatch-api.onrender.com${obj.imgeUrl}`
                      : ""
                  }
                  tag={obj.tags}
                  postDate={obj.createdAt}
                />
              ))}
            </div>
            <div className='tags-conteiner'>
              <h2>Теги</h2>
              <ul>
                {uniqueTags.map((tag) => (
                  <li key={tag}>
                    <Link to={`/category/${tag}`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {currentPosts.length < posts.items.length && (
            <div className='load-more-button'>
              <button onClick={handleLoadMore}>Дивитись більше</button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Home;
