import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PostsOutlet from "../pages/outlets/PostsOutlet";
import PostsPage from "../pages/PostsPage";
import PostPage from "../pages/PostPage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostsOutlet />}>
        <Route index element={<PostsPage />} />
        <Route path=":id" element={<PostPage />} />
      </Route>
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default Routers;
