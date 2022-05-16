import axios from "axios";
import { useEffect, useState } from "react";

const Post = ({ id }) => {
  const [post, setPost] = useState({
    id: null,
    title: null,
    body: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let didCancel = false;
    axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    })
      .then(({ data }) => {
        if (!didCancel) {
          setPost({
            id: data.id,
            title: data.title,
            body: data.body,
          });
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!didCancel) {
          setLoading(false);
          setError("Something went Wrong");
        }
      });

    return () => {
      didCancel = true;
    };
  }, [id]);

  if (loading) return <h1 style={{ textAlign: "center" }}>Loading....</h1>;
  if (error) return <p style={{ color: "red" }}> {error}</p>;

  return (
    <div>
      <p>Id: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
    </div>
  );
};

export default Post;
