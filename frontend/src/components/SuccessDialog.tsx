import React from "react";
import styles from "../styles/SuccessDialog.module.css"

const SuccessDialog = ({ onClose }) => {
  return (
    <div className={styles.successDialog}>
      <h3>Success!</h3>
      <p>User has been added successfully.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default SuccessDialog;
