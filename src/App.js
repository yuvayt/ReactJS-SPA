import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PostsOutlet from "./pages/PostOutlet/PostsOutlet";
import PostPage from "./pages/PostPage/PostPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>| <Link to="posts">Posts</Link>|{" "}
          <Link to="profile">Profile</Link>| <Link to="login">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsOutlet />}>
            <Route index element={<PostsPage />} />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
