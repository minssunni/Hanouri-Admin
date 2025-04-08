import { useNavigate } from "react-router-dom";
import styles from '../styles/BackButton.module.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // or navigate("back")
  };

  return (
    <div>
      <button className={styles.backButton} onClick={handleGoBack}>
        <ArrowBackIosNewIcon />
        Back
        </button>
    </div>
  );
};

export default BackButton;