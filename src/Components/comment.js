import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

function Comments() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments?_limit=5')
      .then((res) => setComments(res.data))
      .catch((err) => console.error('Error fetching comments:', err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ fix here
    try {
      const res = await axios.post(
        'https://jsonplaceholder.typicode.com/comments',
        {
          name,
          body: text,
          email: 'test@gmail.com',
          postId: 1,
        }
      );

      setComments([...comments, res.data]);
      setName('');
      setText('');
    } catch (err) {
      console.error('Error posting comment:', err);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Post a Comment (JSONPlaceholder)</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '300px' }}
        />

        <textarea
          placeholder="Your comment here"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '300px', height: '100px' }}
        />

        <button type="submit">Post Comment</button>
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
  );
}

export default Comments // ✅ match the function name
