import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import UserOutlet from "../../pages/outlets/UserOutlet";
import PostPage from "../../pages/PostPage";
import ProfilePage from "../../pages/ProfilePage";
import LoginPage from "../../pages/LoginPage";
import LoremPage from "../../pages/LoremPage";
import ManageUserPage from "../../pages/ManageUserPage";
import NewUserPage from "../../pages/NewUserPage";
import EditUserPage from "../../pages/EditUserPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user" element={<UserOutlet />}>
        <Route index element={<ManageUserPage />} />
        <Route path=":id" element={<PostPage />} />
        <Route path="new" element={<NewUserPage />}></Route>
        <Route path="edit" element={<EditUserPage />}></Route>
      </Route>
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/lorem" element={<LoremPage />} />
    </Routes>
  );
};

export default Routers;
