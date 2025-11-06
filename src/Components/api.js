import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

function Api() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Example fetch — replace with your actual API
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, []);

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
          textAlign: "center",
        }}
      >
        <h2>User Info</h2>
        {user ? (
          <div>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </>
  );
}

export default Api;
