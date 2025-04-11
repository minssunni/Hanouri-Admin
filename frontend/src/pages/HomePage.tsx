import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Home Page</h1>
        <Link to="/users"> View All Users</Link>
        <Link to="/attendance">Attendance</Link>
        <Link to="/myMokwons">My Mokwons</Link>
        <Link to="/users/add">+ Add User</Link>
      </div>
    </>
  );
};

export default HomePage;
