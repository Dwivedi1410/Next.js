"use client";

import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <>
      <h1>Posts</h1>
      <div className="posts-container">
        {posts.map(({ id, title, body }) => (
          <div className="post-card" key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;


// Client side data fetching is similar to how we fetch data in the React in the client side.

//Note :- Our server will only send the Normal html , then in client side data is fetched and then it will get populated in the html sent by the server.
