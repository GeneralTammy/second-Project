import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // Fetch posts on mount
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => setPosts(res.data))
      .catch((err) => console.error('Error fetching posts:', err));
  }, []);

  // Submit new post
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
        userId: 1, // required by the API
      });

      setPosts([...posts, res.data]);
      setTitle('');
      setBody('');
    } catch (err) {
      console.error('Error posting:', err);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Create a Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '300px' }}
        />

        <textarea
          placeholder="Post Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '300px', height: '100px' }}
        />

        <button type="submit">Submit Post</button>
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
  );
}

export default Posts;
