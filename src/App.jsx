import "./index.scss";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { request } from "graphql-request";
import Header from "./components/Header";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts } = await request(
        "https://api-sa-east-1.hygraph.com/v2/cljyekwre0d3u01t5h2hn6nsk/master",
        `{
          posts{
            title,
            slug,
            updatedAt,
            content {
              html
            }
          }
        }`
      );
      setPost(posts);
    };
    fetchPosts();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home post={post} />}></Route>
        {post &&
          post.map((post) => (
            <Route
              path={`/${post.slug}`}
              element={<Post post={post} />}
              key={post.slug}
            ></Route>
          ))}
      </Routes>
    </Router>
  );
}

export default App;
