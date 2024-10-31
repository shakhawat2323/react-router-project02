import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Posts = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();
  const styless = {
    border: "2px solid red",
    padding: "5px",
    borderRadius: "15px",
    margintTop: "5px",
  };
  const Handeldata = () => {
    navigate(`/posts/${id}`);
  };
  return (
    <div style={styless}>
      <h2>Post Id : {id}</h2>
      <h3>{title}</h3>
      <Link to={`/posts/${id}`}>Show Post</Link>
      <Link to={`/posts/${id}`}>
        <button>Post Delels</button>
      </Link>
      <button onClick={Handeldata}>Click Herme</button>
    </div>
  );
};

export default Posts;
