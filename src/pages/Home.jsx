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
    }, 3000);
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
              {popularPosts.slice(0, 4).map((obj) => (
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
          <div className='cards__wrapper cards-all__wrapper'>
            <div className='cards-all'>
              {currentPosts.slice(3).map((obj, index) => (
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
              {/* Pagination */}
              {/* <div className='pagination'>
                {posts.items.length > postsPerPage && (
                  <ul className='pagination-list'>
                    {Array.from(
                      { length: Math.ceil(posts.items.length / postsPerPage) },
                      (_, index) => (
                        <li
                          key={index}
                          className={`pagination-item ${
                            currentPage === index + 1 ? "active" : ""
                          }`}
                          onClick={() => paginate(index + 1)}
                        >
                          {index + 1}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div> */}

              {currentPosts.length < posts.items.length && (
                <div className='load-more-button'>
                  <button onClick={handleLoadMore}>Load More</button>
                </div>
              )}
            </div>
            <div className='tags-conteiner'>
              <h2>Tags:</h2>
              <ul>
                {uniqueTags.map((tag) => (
                  <li key={tag}>
                    <Link to={`/category/${tag}`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default Home;
