import styles from "../styles/Modal.module.css";

const MokwonsPage = ({ selectedMokwon }) => {
  return (
    <div className={styles.modal}>
      <p>Name: {selectedMokwon.name}</p>
      <p>Date of Birth: {selectedMokwon.dateOfBirth}</p>
      <p>Gedner: {selectedMokwon.gender}</p>
      <p>Address: {selectedMokwon.address}</p>
      <p>Emergency Contact: {selectedMokwon.emergencyContact}</p>
      <p>Notes: {selectedMokwon.notes}</p>
    </div>
  );
};

export default MokwonsPage;
