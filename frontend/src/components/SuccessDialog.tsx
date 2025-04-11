import styles from "../styles/SuccessDialog.module.css";

interface SuccessDialogProps {
  onClose: () => void;
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({ onClose }) => {
  return (
    <div className={styles.successDialog}>
      <h3>Success!</h3>
      <p>User has been added successfully.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default SuccessDialog;
