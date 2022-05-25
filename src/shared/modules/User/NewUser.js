import { useState } from "react";

const NewUser = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    dob: null,
    joinedDate: null,
    gender: null,
    type: null,
    location: null,
  });

  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    dob: false,
    joinedDate: false,
    gender: false,
    type: false,
  });

  const handleOnBlur = (evt) => {
    setTouched({ ...touched, [evt.target.name]: true });
  };

  const handleChange = (evt) => {
    setValues({ ...values, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setTouched({ touched: (p) => (p = true) });
    for (var p in touched) {
      if (p) {
        return;
      }
    }
    setTouched({ username: false, password: false });
    setValues({ username: "", password: "" });
  };

  return <h1>this is new user page</h1>;
};

export default NewUser;
