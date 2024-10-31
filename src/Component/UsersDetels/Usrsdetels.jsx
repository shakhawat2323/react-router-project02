import { useLoaderData } from "react-router-dom";

const Usrsdetels = () => {
  const users = useLoaderData();
  const { name } = users;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Usrsdetels;
