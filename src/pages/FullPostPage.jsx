import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import "../style/FullPostPage.scss";
import FullPost from "../components/FullPost";
import PreLoader from "../components/PreLoader";

function FullPostPage() {
  // const { id } = useParams();
  // const [post, setPost] = useState();
  // const url = `http://localhost:3001/posts/${id}`;
  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((data) => {
  //       setPost(data.data);
  //     })
  //     .catch((err) => {
  //       console, log(err);
  //     });
  // }, [id]);
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  console.log(data);
  if (isLoading) {
    return <PreLoader />;
  }
  return (
    <>
    {data && 
        <FullPost
        index={data.index}
        title={data.title}
        text={data.text}
        img={data.imgeUrl}
        tag={data.tags}
        postData={data.createdAt}
        userName={data.user.fullName}
      />
    }
    </>
  );
}

export default FullPostPage;

// function addZeroInDate(date){
//   return (date < 10) ? date = '0' + date : date;
// }
// const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

// function getUserDate(t){
//     t = new Date(post.createdAt)
//     const month = months[t.getMonth()];
//     const day = addZeroInDate(t.getDate());
//     const formattedDate = `${month} ${day}, ${t.getFullYear()}`;
//     // console.log(formattedDate); // "Березень 31, 2023"
//     return formattedDate;
// }
