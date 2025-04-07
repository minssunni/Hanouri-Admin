import React from "react";

const SuccessDialog = ({ onClose }) => {
  return (
    <div className="success-dialog">
      <h3>Success!</h3>
      <p>User has been added successfully.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default SuccessDialog;
