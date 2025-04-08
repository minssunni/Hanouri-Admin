import { Link } from "react-router-dom";
import SundayDatesList from "../components/SundayDatesList";
import BackButton from "../components/BackButton";

const HomePage = () => {
  return (
    <div>
      <BackButton />
      <SundayDatesList />
    </div>
  );
};

export default HomePage;
