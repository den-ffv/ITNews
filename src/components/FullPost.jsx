import {useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios";
import { fetchAuthMe } from "../redux/slices/auth";
import { fetchRemovePost } from "../redux/slices/posts";
import { getUserDate } from "../utils/createDate";
import { minutReadFullPost } from "../utils/minutRead";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton,} from "react-share";
import view from "../img/view.png";
import twitter from "../img/twitter.png";
import facebook from "../img/facebook.png";
import linkedin from "../img/linkedin.png";
import saveOn from "../img/save-on.png"
import saveOff from "../img/save-off.png"
import "./FullPost.scss";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

function FullPost({ title, text, img, tag, postData, userName, idPost, views,}) {

  const navigate = useNavigate();
  const disparch = useDispatch();
  const user = useSelector((fetchAuthMe) => fetchAuthMe.auth.data);
  const isAdmin = user && user.role === "admin";
  const onClickRemove = () => {
    if (window.confirm("Ви дійсно хочете видалити?")) {
      disparch(fetchRemovePost(idPost));
      navigate("/");
    }
  };
  const onClickEdit = () => {
    navigate(`/add-post/${idPost}/edit`);
  };

  // const handleSavePost = async () => {
  //   try {
  //     await axios.post(`/posts/${idPost}/save`);
  //   } catch (error) {
  //     console.log(error);
  //     alert(error)
  //   }
  // };

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    checkPostSavedStatus();
  }, [idPost]);

  const checkPostSavedStatus = async () => {
    try {
      const response = await axios.get(`/saved-post`);
      setIsSaved(response.data.saved);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSavePost = async () => {
    try {
      if (isSaved) {
        await axios.delete(`/posts/${idPost}/remove`);
        setIsSaved(false);
      } else {
        await axios.post(`/posts/${idPost}/save`);
        setIsSaved(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='full-post__wrapper'>
        <Link to={`/category/${tag}`} className='mini-text'>
          {tag}
        </Link>
        <h1 className='full-post__title title'>{title}</h1>
        {!img ? "" : <img className='full-post__img' src={img} alt='img' />}
        <div className='text-conteiner'>
          <div className='data-conteiner'>
            <p className='mini-text'>{getUserDate(postData)}</p>
            <p className='mini-text'>{minutReadFullPost(text)}</p>
            <img className='img-view' src={view} alt='view' />
            <p className='mini-text'>{views}</p>
          </div>
          <div className='full-post__text'>
            {text}
          </div>
          <FacebookShareButton url={img} quote={title}>
            <img className='likn-social-maras' src={facebook} alt='' />
          </FacebookShareButton>

          <TwitterShareButton url={img} title={title}>
            <img className='likn-social-maras' src={twitter} alt='' />
          </TwitterShareButton>

          <LinkedinShareButton url={img} title={title}>
            <img className='likn-social-maras' src={linkedin} alt='' />
          </LinkedinShareButton>
  
          <button  onClick={handleSavePost}>
            {isSaved ? (<img className='likn-social-maras' src={saveOn} alt="" />): (<img className='likn-social-maras' src={saveOff} alt="" />)}
          </button>
        </div>
        {/* <p>{userName}</p> */}
        {isAdmin ? (
          <>
            <div className='button-sabmit'>
              <button className='button' onClick={onClickRemove}>
                delete
              </button>
              <br></br>
              <button className='button' onClick={onClickEdit}>
                create
              </button>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default FullPost;
