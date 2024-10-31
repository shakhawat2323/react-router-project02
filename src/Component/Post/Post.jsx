import React from "react";
import { useLoaderData } from "react-router-dom";
import Posts from "./Posts";
import "./Post.css";

const Post = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h3>Posts Data : {posts.length}</h3>
      <div className="postt">
        {posts.map((post) => (
          <Posts post={post}></Posts>
        ))}
      </div>
    </div>
  );
};

export default Post;
