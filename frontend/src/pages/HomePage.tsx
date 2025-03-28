import { Link } from "react-router-dom";
import SundayDatesList from "../components/SundayDatesList";

const HomePage = () => {
   
  return (
    <>
    <div>
      <h1>Home Page</h1>
      <Link to="/myMokwons">
        <button>My Mokwons</button>
      </Link>
      <SundayDatesList />
    </div>
    </>
  );
};

export default HomePage;
