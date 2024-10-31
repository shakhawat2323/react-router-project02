import { Link } from "react-router-dom";

const Userscom = ({ users }) => {
  const { id, name, email, phone } = users;

  const styless = {
    border: "2px solid red",
    padding: "5px",
    borderRadius: "15px",
    margintTop: "5px",
  };
  return (
    <div style={styless}>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <Link to={`/users/${id}`}>Show Details</Link>
    </div>
  );
};

export default Userscom;
