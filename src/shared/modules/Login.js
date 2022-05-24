import {
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";

import { createTokens, displayError } from "../services/LoginService";

import {
  validateUsername,
  validatePassword,
} from "../services/ValidationService";
import Typographyz from "./components/Typographyz";

const Login = () => {
  const { login, setLogin } = useContext(LoginContext);

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    username: false,
    password: false,
  });

  const errorUsername = validateUsername(values.username);
  const errorPassword = validatePassword(values.password);

  const [displayErrorUsername, textUsername] = displayError({
    touched: touched.username,
    err: errorUsername,
  });

  const [displayErrorPassword, textPassword] = displayError({
    touched: touched.password,
    err: errorPassword,
  });

  const handleOnBlur = (evt) => {
    setTouched({ ...touched, [evt.target.name]: true });
  };

  const handleChange = (evt) => {
    setValues({ ...values, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setTouched({ username: true, password: true });
    if (errorUsername || errorPassword) {
      return;
    }
    createTokens();
    setTouched({ username: false, password: false });
    setValues({ username: "", password: "" });
    setLogin(true);
  };

  return (
    <Container align="center" justify="center" sx={{ p: 2 }}>
      <Stack
        component={Paper}
        maxWidth={300}
        elevation={3}
        spacing={2}
        sx={{ p: 2 }}
      >
        <Typographyz
          text={"User Login"}
          color="black"
          fontSize={25}
          textTransform="uppercase"
        />
        <Divider />
        <TextField
          label="Username"
          name="username"
          type="text"
          value={values.username}
          onChange={handleChange}
          onBlur={handleOnBlur}
          helperText={textUsername}
          error={displayErrorUsername}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleOnBlur}
          helperText={textPassword}
          error={displayErrorPassword}
        />

        <Button onClick={handleSubmit} variant="contained">
          <Typographyz text="Login" />
        </Button>
        {login && <Typographyz text="Login success!" color="green" />}
      </Stack>
    </Container>
  );
};

export default Login;
