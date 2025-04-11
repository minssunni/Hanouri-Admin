import { useNavigate } from "react-router-dom";
import styles from "../styles/Button.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button className={styles.closeBtn} onClick={handleGoBack}>
        <ArrowBackIosNewIcon />
        Back
      </button>
    </div>
  );
};

export default BackButton;
