import { useState } from "react";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const validateEmail = (email) => {
    if (!email) return "Email is required";
    const validEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!validEmail) return "Email invalid";
    return "";
  };

  const validatePassword = (password) => {
    if (password.length < 8) return "At least 8 characters";
    return "";
  };

  const errorEmail = validateEmail(values.email);
  const errorPassword = validatePassword(values.password);

  if (errorEmail) {
    console.log(errorEmail);
  }
  if (errorPassword) {
    console.log(errorPassword);
  }

  if (console) console.log();

  const handleOnBlur = (evt) => {
    setTouched({ ...touched, [evt.target.name]: true });
  };

  const handleChange = (evt) => {
    setValues({ ...values, [evt.target.name]: evt.target.value });
  };
  const handleSubmit = (evt) => {
    if (errorEmail && errorPassword) return;
    evt.preventDefault();
    console.log(JSON.stringify(values));
  };
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

      <input
        style={{ display: "block", margin: 20 }}
        type="submit"
        value="Submit"
      />
    </form>
  );
};

export default Login;
