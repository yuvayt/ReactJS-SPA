import { Container, Paper } from "@mui/material";
import Typographyz from "./components/Typographyz";

const Home = () => {
  const sxPaper = { p: 2 };

  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
    "when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  return (
    <Paper component={Container} elevation={3} sx={sxPaper}>
      <Typographyz text={text} color="black" />
    </Paper>
  );
};

export default Home;
