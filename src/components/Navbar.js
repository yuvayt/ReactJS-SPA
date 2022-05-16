import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";

const Navbar = () => {
  const { login, setLogin } = useContext(LoginContext);

  const logout = () => {
    setLogin(false);
    sessionStorage.clear();
  };
  return (
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
  );
};

export default Navbar;
