import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      No match. Go to home: <Link to="/">Link</Link>{" "}
    </div>
  );
};

export default NoMatch;
