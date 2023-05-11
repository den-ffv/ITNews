import React from "react";
import "../style/SearchPage.scss";
import { useSearchParams } from "react-router-dom";
import search from "../img/search.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchTags } from "../redux/slices/posts";
import Post from "../components/Post";
import PreLoader from "../components/PreLoader";

function Search() {
  const dispatch = useDispatch();

  const { posts, tags } = useSelector((state) => state.posts);
  const [value, setValue] = React.useState("");
  const [filteredPost, setFilteredPost] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get("post") || "";
  const hendelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    setSearchParams({post: query})
  };

  React.useEffect(() => {
    dispatch(fetchPosts());
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // const handleSearch = () => {
    const filteredPosts = posts.items.filter((post) => {
      return post.title.toLowerCase().includes(postQuery);
    });
  //   setFilteredPost(filteredPosts);
  // };

  if (isLoading) {
    return <PreLoader />;
  }
  return (
    <div className='wrapper'>
      <h1 className='main-title'>
        Search Post from <span>Uncatch</span>
      </h1>
      <div >
        <form className='search__wrapper ' autoCapitalize='off' onSubmit={hendelSubmit}>
        <img src={search} alt='search' />
          <input
            type='text'
            name='search'
            placeholder='Пошук'
            className='search'
            onChange={(event) => setValue(event.target.value)}
          />
          <input className='search__button' type="submit" value={"search"}/>
        </form>
      </div>
      {/* numbrt of articles <p>{posts.items.length}</p> */}
      <div className='cards'>
        {posts.items.filter(
         post => post.title.toLowerCase().includes(postQuery)
        ).map((obj, index) => (
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
    </div>
  );
}

export default Search;
