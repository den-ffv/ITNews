import React from "react";
import "../style/AddPost.scss";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../redux/slices/auth";
import { useNavigate } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

function AddPost() {
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  console.log(isAuth);

  const imageUrl = '';
  const [value, setValue] = React.useState('');

  const handleChangeFile = () => {};

  const onClickRemoveImage = () => {};

  const onChange = React.useCallback((value) => {
    setValue(value);
  }, []);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      minHeight: '500px',
      maxHeight: '1000px',
      autofocus: true,
      placeholder: 'Введіть текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
      toolbar: ["bold", "italic", "heading","|", "quote","ordered-list", "unordered-list","|","link", "code", "image", "|", "upload-image"],
    }),
    [],
  );

    React.useEffect(() => {
      if (!window.localStorage.getItem('token') && !isAuth) {
        console.log("text test if")
        navigate('/')
      }
    }, [])


  return (
    <>
        <div className="wrapper warpper-add-post">
          <button className="add-post-btn" variant='outlined' size='large'>
            Завантажити превью
          </button>
          <input type='file' onChange={handleChangeFile} hidden />
          {imageUrl && (
            <button
              variant='contained'
              color='error'
              onClick={onClickRemoveImage}
            >
              Удалить
            </button>
          )}
          {imageUrl && (
            <img
              // className={styles.image}
              src={`http://localhost:3001${imageUrl}`}
              alt='Uploaded'
            />
          )}
          <div className="input-title-tags">
            <input className="input-title" variant='standard' placeholder='Заголовок статi...' fullWidth/>
            <input className="input-tags" variant='standard' placeholder='Теги' fullWidth/>
          </div>

          <SimpleMDE
            className='simple-mde'
            value={value}
            onChange={onChange}
            options={options}
          />
          <div className='button-sabmit'>
            <button className="add-post-btn" type="submit">
              Опублiкувати
            </button>
            <a href='/'>
              <button className="add-post-btn" >Відміна</button>
            </a>
          </div>
        </div>
    </>
  );
}

export default AddPost;
