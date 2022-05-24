import { styled, TextField } from "@mui/material";

export const TextFieldz = styled(TextField)({
  "& label.Mui-focused": {
    color: "#000000",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#000000",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#212121",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#000000",
    },
  },
});
