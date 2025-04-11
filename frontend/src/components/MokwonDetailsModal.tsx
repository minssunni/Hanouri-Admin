import styles from "../styles/Modal.module.css";

interface Mokwon {
  id: number;
  name: string;
  group: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  carPlate?: string;
  emergencyContact?: string;
  dateAdded: string;
  notes?: string;
  contact?: string;
  attendanceRate?: number;
}

interface MokwonsPageProps {
  selectedMokwon: Mokwon;
}

const MokwonsPage: React.FC<MokwonsPageProps> = ({ selectedMokwon }) => {
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
