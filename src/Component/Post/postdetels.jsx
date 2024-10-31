import React from "react";
import { useLoaderData } from "react-router-dom";

const postdetels = () => {
  const Users = useLoaderData();
  const { id, title, body } = Users;
  return (
    <div>
      <h1>Post id : {id}</h1>
      <h3>Title : {title}</h3>
      <p> Body: {body}</p>
    </div>
  );
};

export default postdetels;
