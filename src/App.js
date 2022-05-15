import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { LoginContext } from "./contexts/LoginContext";
import { UserIdContext } from "./contexts/UserIdContext";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PostsOutlet from "./pages/PostOutlet/PostsOutlet";
import PostPage from "./pages/PostPage/PostPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const App = () => {
  const [login, setLogin] = useState(false);
  const [userId, setUserId] = useState("3");

  const logout = () => {
    setLogin(false);
    sessionStorage.clear();
  };

  sessionStorage.clear();
  return (
    <div className="App">
      <BrowserRouter>
        <LoginContext.Provider value={{ login, setLogin }}>
          <UserIdContext.Provider value={{ userId, setUserId }}>
            <nav className="App-nav">
              <Link className="App-link" to="/">
                Home
              </Link>
              <Link to="posts">Posts</Link>{" "}
              <Link className="App-link" to="profile">
                Profile
              </Link>{" "}
              {!login && (
                <Link className="App-link" to="login">
                  Login
                </Link>
              )}
              {login && (
                <button className="App-link" onClick={logout}>
                  Logout
                </button>
              )}
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
          </UserIdContext.Provider>
        </LoginContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
