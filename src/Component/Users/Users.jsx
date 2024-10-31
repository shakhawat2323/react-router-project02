import { useLoaderData } from "react-router-dom";
import Userscom from "./Userscom";
import "./Users.css";

const Users = () => {
  const Users = useLoaderData();
  return (
    <div>
      <h4>Your Users {Users.length}</h4>
      <div className="colam">
        {Users.map((users) => (
          <Userscom users={users}></Userscom>
        ))}
      </div>
    </div>
  );
};

export default Users;
