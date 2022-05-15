import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { UserIdContext } from "../../contexts/UserIdContext";
import {
  getTokens,
  setTokens,
  validateEmail,
  validatePassword,
} from "./LoginService";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const { login, setLogin } = useContext(LoginContext);
  const { userId, setUserId } = useContext(UserIdContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let didCancel = false;
    axios({
      method: "GET",
      url: `https://60dff0ba6b689e001788c858.mockapi.io/tokens`,
    })
      .then(({ data }) => {
        if (!didCancel && login) {
          setTokens(data);
          console.log("first");
        }
        setLoading(false);
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
  }, [login]);

  if (loading) return <h1 style={{ textAlign: "center" }}>Loading....</h1>;
  if (error) return <p style={{ color: "red" }}> {error}</p>;

  console.log(getTokens());

  const errorEmail = validateEmail(values.email);
  const errorPassword = validatePassword(values.password);

  const handleOnBlur = (evt) => {
    setTouched({ ...touched, [evt.target.name]: true });
  };

  const handleChange = (evt) => {
    setValues({ ...values, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    if (errorEmail && errorPassword) return;
    evt.preventDefault();
    //console.log(JSON.stringify(values));
    setLogin(true);
  };

  if (login) {
    const tokens = getTokens();
    if (tokens) {
      setUserId(tokens.userId);
    }
  }

  console.log("qua day");

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{ display: "block", margin: 20 }}
        value={values.email}
        onChange={handleChange}
        onBlur={handleOnBlur}
        placeholder="Email"
        name="email"
        type="text"
        required
      />
      {touched.email && (
        <div style={{ color: "red", margin: 20 }}>{errorEmail}</div>
      )}
      <input
        style={{ display: "block", margin: 20 }}
        value={values.password}
        onChange={handleChange}
        onBlur={handleOnBlur}
        placeholder="Password"
        name="password"
        type="password"
        required
      />
      {touched.password && (
        <div style={{ color: "red", margin: 20 }}>{errorPassword}</div>
      )}
      <input
        style={{ display: "block", margin: 20 }}
        type="submit"
        value="Submit"
      />
      {login && (
        <div style={{ color: "green", margin: 20 }}>"Login success"</div>
      )}
    </form>
  );
};

export default Login;
