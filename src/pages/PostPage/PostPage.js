import { useParams } from "react-router-dom";
import Post from "../../components/Post/Post";

const PostPage = () => {
  let { id } = useParams();
  return <Post id={id} />;
};

export default PostPage;
