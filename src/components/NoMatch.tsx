import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      Route doesn't exist. <Link to="/">Go to home page...</Link>
    </div>
  );
};

export default NoMatch;
