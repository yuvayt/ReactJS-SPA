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
          console.log(data);
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

  if (loading) return <h1>Loading....</h1>;
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
    if (sortValue === "ASC")
      return postsFiltered.sort((pA, pB) => {
        if (pA.title.toLowerCase() < pB.title.toLowerCase()) return -1;
        if (pA.title.toLowerCase() > pB.title.toLowerCase()) return 1;
        return 0;
      });
    if (sortValue === "DES")
      return postsFiltered.sort((pA, pB) => {
        if (pA.title.toLowerCase() < pB.title.toLowerCase()) return 1;
        if (pA.title.toLowerCase() > pB.title.toLowerCase()) return -1;
        return 0;
      });
  };

  let postsSorted = getPostsSorted();

  const handleSortName = () => {
    setSortValue((current) => {
      if (current === null) return "ASC";
      if (current === "ASC") return "DES";
      return null;
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Type to search"
          onChange={(evt) => setSearchInput(evt.target.value)}
        />
      </div>
      <table>
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
      </table>
    </div>
  );
};

export default Posts;
