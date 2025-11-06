import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [hover, setHover] = useState(false); // 👈 track hover state

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body,
          userId: 1,
        }
      );

      setPosts([...posts, res.data]);
      setTitle("");
      setBody("");
    } catch (err) {
      console.error("Error posting:", err);
    }
  };

  return (
    <>
      <div class="mission">
        <div class="business">
          <h1>Blog Post</h1>
          <div class="link">
            <a href="/Home" class="link-1">
              Home
            </a>
            <a href="/Posts" class="link-2">
              > Post
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "20px",
          margin: "100px 350px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
          width: "50%",
          borderRadius: ".3em",
        }}
      >
        <h1>Create a Post</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              display: "block",
              margin: "10px 0",
              padding: "8px",
              width: "500px",
              borderRadius: ".3em",
              borderColor: "0 10px 30px rgba(0, 0, 0, 0.15)",
            }}
          />

          <textarea
            placeholder="Post Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            style={{
              display: "block",
              margin: "10px 0px",
              padding: "8px",
              width: "500px",
              height: "250px",
              borderRadius: ".3em",
              borderColor: "0 10px 30px rgba(0, 0, 0, 0.15)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
              border: "0 10px 30px rgba(0, 0, 0, 0.15)",
            }}
          />

          <button
            type="submit"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              backgroundColor: hover ? "#000" : "rgb(169, 240, 98)",
              color: hover ? "rgb(169, 240, 98)" : "#000",
              padding: "10px 20px",
              border: hover ? "2px solid rgb(169, 240, 98)" : "2px solid",
              borderRadius: "0.4em",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease",
            }}
          >
            Submit Post
          </button>
        </form>

        <hr />

        <h2>Recent Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Posts;
