import React from "react";
import "../style/SearchPage.scss";
import search from "../img/search.png";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post";

function Search() {
  const { posts, tags } = useSelector((state) => state.posts);
  const [value, setValue] = React.useState("");
  const filteredPost = posts.items.filter((post) => {
    return post.title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className='wrapper'>
      <h1 className="main-title">Search Post from Uncatch</h1> 
      <div className='search__wrapper '>
        <img src={search} alt='' />
        <input
          type='text'
          placeholder='Пошук'
          className='search'
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <div className='cards'>
        {!value
          ? ""
          : filteredPost.map((obj, index) => (
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
