import {
  CircularProgress,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState(() => []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [sortValue, setSortValue] = useState(null);

  useEffect(() => {
    let didCancel = false;
    axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/posts`,
    })
      .then(({ data }) => {
        if (!didCancel) {
          setPosts(data);
          setLoading(false);
        }
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
  }, []);

  if (loading) return <CircularProgress color="inherit" />;
  if (error) return <p style={{ color: "red" }}> {error}</p>;

  let postsFiltered = posts.filter((post) =>
    post.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const removePost = (e) => {
    let removeId = e.target.getAttribute("removeId");
    setPosts(posts.filter((post) => post.id != removeId));
  };

  const getPostsSorted = () => {
    if (sortValue === null) return postsFiltered;
    if (sortValue === "asc")
      return postsFiltered.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
      });
    if (sortValue === "des")
      return postsFiltered.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
        return 0;
      });
  };

  let postsSorted = getPostsSorted();

  const handleSortName = () => {
    setSortValue((current) => {
      if (current === null) return "asc";
      if (current === "asc") return "des";
      return null;
    });
  };

  return (
    <Paper component={Container} elevation={3} sx={{ p: 2 }}>
      <div>
        <input
          type="text"
          placeholder="Type to search"
          onChange={(evt) => setSearchInput(evt.target.value)}
        />
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 1000 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {postsSorted.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell align="right">Actions go here</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Posts;

{
  /* <table style={{ marginLeft: 30 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th onClick={handleSortName}>Title {sortValue}</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {postsSorted.map(({ id, title }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>
                <Link to={`${id}`}>Detail</Link>
                <button removeId={id} onClick={removePost}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */
}
