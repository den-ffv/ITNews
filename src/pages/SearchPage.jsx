import React from "react";
import "../style/SearchPage.scss";
import search from "../img/search.png";

function Search({ postTitle }) {
  const [value, setValue] = useState("");
  const filteredPost = posts.items.filter((post) => {
    return post.title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className='search__wrapper'>
      <img src={search} alt='' />
      <input
        type='text'
        placeholder='Пошук'
        className='search'
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

export default Search;
