import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import "../style/FullPostPage.scss";
import FullPost from "../components/FullPost";
import PreLoader from "../components/PreLoader";
import ReactMarkdown from 'react-markdown'

function FullPostPage() {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
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
  }, [id]);


 
  return (
    <>

      {isLoading ? (
        <PreLoader text={"Uncatch"} />
      ) : (
        <FullPost
          index={data.index}
          title={data.title}
          text={<ReactMarkdown children={data.text}/>}
          img={`http://localhost:3001${data.imgeUrl}`}
          tag={data.tags}
          postData={data.createdAt}
          userName={data.user.fullName}
        />
      )}
    </>
  );
}

export default FullPostPage;