import { useNavigate, useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Errorpage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Opps</h1>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h1>page notfund</h1>
          <p>Go back whare from</p>
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Errorpage;
