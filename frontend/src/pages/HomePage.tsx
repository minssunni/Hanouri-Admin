import { Link } from "react-router-dom";
import SundayDatesList from "../components/SundayDatesList";

const HomePage = () => {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <Link to="/users">
          <button>View All Users</button>
        </Link>
        <Link to="/attendance">
          <button>Attendance</button>
        </Link>
        <Link to="/myMokwons">
          <button>My Mokwons</button>
        </Link>
        <Link to="/users/add">
          <button>+ Add User</button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
