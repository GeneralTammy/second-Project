import React, { useState, useEffect } from 'react';

import { BrowserRouter } from 'react-router-dom';

function Api() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Example fetch — replace with your actual API
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching user:', error));
  }, []);

  return (
    <div>
      <h2>User Info</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default Api;
