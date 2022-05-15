import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { UserIdContext } from "../../contexts/UserIdContext";
import Login from "../Login/Login";
import { getTokens } from "../Login/LoginService";

const Profile = () => {
  const [profile, setProfile] = useState({
    id: null,
    name: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { login, setLogin } = useContext(LoginContext);
  const { userId, setUserId } = useContext(UserIdContext);

  useEffect(() => {
    let didCancel = false;
    axios({
      method: "GET",
      url: `https://60dff0ba6b689e001788c858.mockapi.io/users/${userId}`,
    })
      .then(({ data }) => {
        if (!didCancel) {
          if (login) {
            setProfile({
              id: data.id,
              name: data.name,
            });
          }
          setLoading(false);
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

  if (loading) return <h1 style={{ textAlign: "center" }}>Loading....</h1>;
  if (error) return <p style={{ color: "red" }}> {error}</p>;

  console.log(profile);
  console.log(login);

  if (!login) {
    return (
      <div>
        <h5 style={{ margin: 30 }}>You need to login to continue</h5>
        <Login />
      </div>
    );
  }

  return (
    <div style={{ margin: 30 }}>
      <p>ID: {profile.id}</p>
      <p>Name: {profile.name}</p>
    </div>
  );
};

export default Profile;
