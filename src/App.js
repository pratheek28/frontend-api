// App.js
import React, { useState, useEffect } from 'react';
import Welcome from './components/Welcome';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 5))) // Fetch the first 5 posts
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Welcome />
      <h2>Posts from the API:</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
