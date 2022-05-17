import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Posts.css";

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

  if (loading) return <h1 style={{ textAlign: "center" }}>Loading....</h1>;
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
      return postsFiltered.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
      });
    if (sortValue === "DES")
      return postsFiltered.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
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
          className="Posts-search"
          type="text"
          placeholder="Type to search"
          onChange={(evt) => setSearchInput(evt.target.value)}
        />
      </div>
      <table style={{ marginLeft: 30 }}>
        <thead>
          <tr>
            <th className="Posts-t">ID</th>
            <th className="Posts-t" onClick={handleSortName}>
              Title {sortValue}
            </th>
            <th className="Posts-t">Actions</th>
          </tr>
        </thead>
        <tbody>
          {postsSorted.map(({ id, title }) => (
            <tr key={id}>
              <td className="Posts-t">{id}</td>
              <td className="Posts-t">{title}</td>
              <td className="Posts-t">
                <Link className="Posts-actions" to={`${id}`}>
                  Detail
                </Link>
                <button
                  className="Posts-actions"
                  removeId={id}
                  onClick={removePost}
                >
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
