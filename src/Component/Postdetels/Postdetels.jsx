import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
const Postdetels = () => {
  const Users = useLoaderData();
  const naveget = useNavigate();
  const { id, title, body } = Users;
  const Handalebtn = () => {
    naveget(-1);
  };
  return (
    <div>
      <h1>Post id : {id}</h1>
      <h3>Title : {title}</h3>
      <p> Body: {body}</p>
      <button onClick={Handalebtn}>Go Back</button>
    </div>
  );
};

export default Postdetels;
