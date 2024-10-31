import React from "react";
import "../../../src/App.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Hader = () => {
  return (
    <div>
      <h1>My Website</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <NavLink to="/contect">contect</NavLink>
        <Link to="/blog">Bloge</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
      </nav>
    </div>
  );
};

export default Hader;
