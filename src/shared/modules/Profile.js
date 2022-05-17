import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";
import Login from "./Login";
import { getTokens } from "../services/LoginService";

const Profile = () => {
  const [profile, setProfile] = useState({
    id: null,
    name: null,
  });

  const { login, setLogin } = useContext(LoginContext);
  const [userId, setUserId] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let didCancel = false;
    axios({
      method: "GET",
      url: `https://60dff0ba6b689e001788c858.mockapi.io/users/${userId}`,
      headers: {
        Authorization: userId,
      },
    })
      .then(({ data }) => {
        if (!didCancel) {
          if (login) {
            setProfile({
              id: data.id,
              name: data.name,
            });
            setLoading(false);
          }
        }
      })
      .catch((err) => {
        if (!didCancel) {
          setLoading(false);
          setError("Something went Wrong");
          console.log(err);
        }
      });

    return () => {
      didCancel = true;
    };
  }, [userId, login]);

  if (login && !userId) {
    const tokens = getTokens();
    if (tokens) {
      setUserId(tokens.userId);
    }
  }

  if (!login) {
    return (
      <div>
        <h5 style={{ margin: 30 }}>You need to login to continue</h5>
        <Login />
      </div>
    );
  }

  if (loading) return <h1 style={{ textAlign: "center" }}>Loading....</h1>;
  if (error) return <p style={{ color: "red" }}> {error}</p>;

  return (
    <div style={{ margin: 30 }}>
      <p>ID: {profile.id}</p>
      <p>Name: {profile.name}</p>
    </div>
  );
};

export default Profile;
