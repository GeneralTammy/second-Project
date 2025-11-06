import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

function Comments() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments?_limit=5")
      .then((res) => setComments(res.data))
      .catch((err) => console.error("Error fetching comments:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ fix here
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/comments",
        {
          name,
          body: text,
          email: "test@gmail.com",
          postId: 1,
        }
      );

      setComments([...comments, res.data]);
      setName("");
      setText("");
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };

  return (
    <>
      <div class="mission">
        <div class="business">
          <h1>Comment</h1>
          <div class="link">
            <a href="/Home" class="link-1">
              Home
            </a>
            <a href="/comment" class="link-2">
              > Comment
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
        <h1>Post a Comment (JSONPlaceholder)</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              display: "block",
              margin: "10px 0",
              padding: "8px",
              borderRadius: ".3em ",
              width: "500px",
            }}
          />

          <textarea
            placeholder="Your comment here"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              display: "block",
              margin: "10px 0",
              padding: "8px",
              width: "500px",
              height: "250px",
              borderRadius: ".3em",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
            }}
          />

          <button
            type="submit"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              backgroundColor: hover ? "#000" : "rgb(169, 240, 98",
              color: hover ? "rgb(169, 240, 98" : "#000",
              padding: "20px, 20px",
              border: hover ? "2px solid rgb(169, 240, 98)" : "2px solid",
              borderRadius: "0.4em",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease",
              height: "40px",
            }}
          >
            Post Comment
          </button>
        </form>

        <hr />

        <h2>Comments:</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.name}</strong>: {comment.body}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Comments; // ✅ match the function name
