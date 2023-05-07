import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PreLoader from '../components/PreLoader';
import Post from '../components/Post';
import { fetchPosts, fetchTags } from '../redux/slices/posts';
import { useParams } from 'react-router-dom';

function Category() {
  const dispatch = useDispatch();
  const [posts, setPosts] = React.useState([]);
  // const { posts } = useSelector((state) => state.posts);
  const [isLoading, setLoading] =  React.useState(true);

  // React.useEffect(() => {
  //   dispatch(fetchPosts());
  //   dispatch(fetchTags());
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  const { tag } = useParams();

  React.useEffect(() => {
    dispatch(fetchTags(tag));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [tag]);

    if (isLoading) {
    return <PreLoader />;
  }
  return (
    <div className="wrapper">
      <h1 className="main-title">{tag}</h1>
      <div className=''>
        {posts.map((obj, index) => (
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
