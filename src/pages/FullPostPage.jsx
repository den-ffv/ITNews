import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "../axios";
import "../style/FullPostPage.scss";
import FullPost from "../components/FullPost";
import PreLoader from "../components/PreLoader";
import ReactMarkdown from "react-markdown";
import { fetchPosts } from "../redux/slices/posts";
import MiniPost from "../components/MiniPost";

function FullPostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  const currentPost = posts.items.find((post) => post._id === id);
  const tag = currentPost ? currentPost.tags[0] : "";

  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(fetchPosts());
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
      });
      window.scrollTo({ top: 0 });
    }, [id]);

  const getRelatedPosts = (posts, tag, count) => {
    const relatedPosts = posts.filter((post) => post.tags.includes(tag));
    const filteredPosts = relatedPosts.filter((post) => post._id !== id);

    return filteredPosts.slice(0, count);
  };
  const relatedPosts = getRelatedPosts(posts.items, tag, 3);

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <div className=''>
          <FullPost
            idPost={data._id}
            index={data.index}
            title={data.title}
            text={<ReactMarkdown children={data.text} />}
            img={
              data.imgeUrl
                ? `https://uncatch-api.onrender.com${data.imgeUrl}`
                : ""
            }
            views={data.viewsCount}
            tag={data.tags}
            postData={data.createdAt}
            userName={data.user.fullName}
          />
          {!relatedPosts.leangth ? (
            <div className='read-more wrapper'>
              <h2 className='read-more__title'>Читати більше</h2>
              <div className='read-more__conteiner'>
                {relatedPosts.map((post) => (
                  <MiniPost
                    key={post._id}
                    idPost={post._id}
                    title={post.title}
                    text={post.text}
                    img={
                      post.imgeUrl
                        ? `https://uncatch-api.onrender.com${post.imgeUrl}`
                        : ""
                    }
                    tag={post.tags}
                    postDate={post.createdAt}
                    user={post.user.fullName}
                  />
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

export default FullPostPage;
