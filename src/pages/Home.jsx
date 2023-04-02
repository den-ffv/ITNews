import React, { useEffect, useState } from "react";
import axios from "axios";
import MiniPost from "../components/MiniPost";
import "../style/pages.scss";


function Home() {
  const url = "http://localhost:3001/posts";
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
          {articles.slice(0).reverse().map((article) => {
            return (
              <MiniPost
                idPost={article._id}
                key={article._id}
                title={article.title}
                text={article.text}
                img={article.imgeUrl}
                tag={article.tags}
                postDate={article.createdAt}
                user={article.user.fullName}
              />
            );
          })}
        </div>
 
      </div>
    </>
  );
}

export default Home;
