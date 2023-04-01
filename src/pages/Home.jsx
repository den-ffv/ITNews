import React, { useEffect, useState } from "react";
import axios from "axios";
import BigPost from "../components/BigPost";
import MiniPost from "../components/MiniPost";
import "../style/pages.scss";

const url = "http://localhost:3001/posts";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(url).then((data) => {
      setArticles(data.data);
    });
  }, []);

  return (
    <>
      <div className='home__wrapper wrapper'>
        <div className='carts'>
          {articles.map((article) => {
            return (
              <MiniPost
                key={article.id}
                title={article.title}
                text={article.text}
                img={article.imgeUrl}
                tag={article.tags}
                postData={article.createdAt}
              />
            );
          })}
        </div>
 
      </div>
    </>
  );
}

export default Home;
