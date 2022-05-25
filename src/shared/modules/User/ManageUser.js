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
import { useState } from "react";
import GetAPI from "../../services/APIService/GetAPI";
import { Types } from "./User";

const ManageUser = () => {
  //const [users, setUsers] = useState(() => []);
  const [searchInput, setSearchInput] = useState("");
  const [sortValue, setSortValue] = useState(null);

  const { data, loading, error } = GetAPI(
    () => [],
    `https://localhost:5001/get-all-users`,
    (data) => data
  );

  if (loading) return <CircularProgress color="inherit" />;
  if (error) return <p style={{ color: "red" }}> {error}</p>;

  const users = data;

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
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Staff Code</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Joined Date</TableCell>
              <TableCell>Type</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.staffCode}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.staffCode}
                </TableCell>
                <TableCell>{row.fullName}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.joinedDate}</TableCell>
                <TableCell>{Types[row.type]}</TableCell>
                <TableCell align="right">Actions go here</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ManageUser;
