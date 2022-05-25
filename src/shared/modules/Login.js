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

import { createTokens } from "../services/LoginService";

import {
  validateUsername,
  validatePassword,
} from "../services/ValidationService";
import Typographyz from "./components/Typographyz";

const Login = () => {
  const { login, setLogin } = useContext(LoginContext);

  const initialValues = { username: "", password: "" };
  const [values, setValues] = useState(initialValues);

  const initialTouched = {
    username: false,
    password: false,
  };
  const [touched, setTouched] = useState(initialTouched);

  const errors = {
    username: touched.username
      ? validateUsername(values.username)
      : "Username here!",
    password: touched.password
      ? validatePassword(values.password)
      : "Password here!",
  };

  const handleOnBlur = (evt) => {
    setTouched({ ...touched, [evt.target.name]: true });
  };

  const handleChange = (evt) => {
    setValues({ ...values, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const touchedCopy = Object.assign({}, touched);
    Object.keys(touchedCopy).forEach((p) => (touchedCopy[p] = true));
    setTouched(touchedCopy);

    for (const k in errors) {
      if (errors[k]) {
        return;
      }
    }

    createTokens();
    setTouched(initialTouched);
    setValues(initialValues);
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
          helperText={errors.username}
          error={!!errors.username && touched.username}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleOnBlur}
          helperText={errors.password}
          error={!!errors.password && touched.password}
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
