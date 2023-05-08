import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PreLoader from "../components/PreLoader";
import Post from "../components/Post";
import { fetchPosts, fetchTags } from "../redux/slices/posts";
import { useParams } from "react-router-dom";

function Category() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const [isLoading, setLoading] = React.useState(true);

  const { tag } = useParams();
 

  const filteredTags = posts.items.filter((post) => {
    return post.tags.includes(tag);
  });

  console.log(filteredTags)
  React.useEffect(() => {
    dispatch(fetchTags(tag));
    dispatch(fetchPosts(tag));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [dispatch, tag]);

  if (isLoading) {
    return <PreLoader />;
  }
  // console.log(posts.items);
  return (
    <div className='wrapper'>
      <h1 className='main-title'>{tag}</h1>
      <div className=''>
        {filteredTags.map((obj, index) => (
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

export default Category;
