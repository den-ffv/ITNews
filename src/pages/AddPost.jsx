import React, {useState, useEffect} from "react";
import "../style/AddPost.scss";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../redux/slices/auth";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAuthMe } from "../redux/slices/auth";
import axios from "../axios";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import NotFoundPage from './NotFoundPage';
import PreLoader from '../components/PreLoader';

function AddPost() {
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  const user = useSelector((fetchAuthMe) => fetchAuthMe.auth.data);
  const isAdmin = user && user.role === 'admin';

  const {id} = useParams()
  const isEditing = Boolean(id);
  const [isLoading, setIsLoading] = useState(false);

  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [imgeUrl, setImgeUrl] = useState("");
  const inputFileRef = React.useRef(null)


  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0]
      formData.append("image", file)
      const {data} = await axios.post("/upload", formData)
      setImgeUrl(data.url)
    } catch (err) {
      console.warn(err);
      alert("Помилка при завантаженні файла!")
    }
  };

  const onClickRemoveImage = async () => {
    setImgeUrl('');
  };

  const onChange = React.useCallback((value) => {
    setText(value);
  }, []);

  const onSubmit = async () => {
    try {
      setIsLoading(true)
      const fields = {
        title, 
        imgeUrl,
        tags: tags.slice(",").toLowerCase().replace(/\s/g, ""),
        text,
      }
    
      const { data } = (isEditing === true) 
      ? await axios.patch(`/posts/${id}`, fields) 
      : await axios.post("/posts", fields);
      const _id = isEditing ? id : data._id
      navigate(`/posts/${_id}`)
    } catch (err) {
      console.warn(err)
      alert("Помилка при завантаженні файла!")
    }
  };

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      minHeight: "500px",
      maxHeight: "1000px",
      autofocus: true,
      placeholder: "Введіть текст...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
      toolbar: [ "bold", "italic", "heading", "|", "quote", "ordered-list", "unordered-list", "|", "link", "code", "image", "|", "upload-image",],
    }),
    []
  );

  // useEffect(() => {
  //   if (!window.localStorage.getItem("token") && !isAuth && isAdmin) {
  //     return navigate("/");
  //   }
  // }, []); 


  useEffect( () => {
    if(id && isEditing){
      axios.get(`/posts/${id}`).then(({data}) => {
        setTitle(data.title)
        setText(data.text)
        setTags(data.tags)
        setImgeUrl(data.imgeUrl)
      })
    }
  }, [id ,isEditing])
  console.log(isAdmin)
  console.log(!window.localStorage.getItem("token"))
  if (window.localStorage.getItem("token") && isAdmin === false) {
    return navigate("/")
  }

 

  return (
    <>
      <div className='wrapper warpper-add-post'>
        <button onClick={() => inputFileRef.current.click()} className='button' variant='outlined' size='large'>
          Завантажити превью
        </button>
        <input ref={inputFileRef} type='file' onChange={handleChangeFile} hidden />
        {imgeUrl && (
          <>
            <button variant='contained' color='error' onClick={onClickRemoveImage} >
              Удалить
            </button>
            <img className="add-img-post" src={`http://localhost:3001${imgeUrl}`} alt='Uploaded'/>
          </>
        )}
     
        <div className='input-title-tags'>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='input-title'
            variant='standard'
            placeholder='Заголовок статi...'
            
          />
          <input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className='input-tags'
            variant='standard'
            placeholder='Теги'
            
          />
        </div>

        <SimpleMDE
          className='simple-mde'
          value={text}
          onChange={onChange}
          options={options}
        />
        <div className='button-sabmit'>
          <button onClick={onSubmit} className='button' type='submit'>
            {(isEditing) ? ("Зберегти") : ("Опублiкувати")}
          </button>
          <a href='/'>
            <button className='button'>Відміна</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default AddPost;
