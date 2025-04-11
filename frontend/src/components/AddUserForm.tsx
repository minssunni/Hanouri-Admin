import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessDialog from "./SuccessDialog";
import styles from "../styles/AddUserForm.module.css";
import buttonstyles from "../styles/Button.module.css";

const AddUserForm = () => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [carPlate, setCarPlate] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [dateAdded, setDateAdded] = useState("");
  const [notes, setNotes] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setDateOfBirth("");
    setGender("");
    setAddress("");
    setCarPlate("");
    setEmergencyContact("");
    setDateAdded("");
    setNotes("");
    setShowSuccess(true);
  };

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setDateAdded(formattedDate);
  }, []);

  const handleClose = () => {
    setShowSuccess(false);
    navigate("/");
  };

  return (
    <div className={styles.addUserForm}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            id="dateOfBirth"
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Gender</label>

          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Female
            </label>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="carPlate">Car Plate</label>
          <input
            id="carPlate"
            type="text"
            value={carPlate}
            onChange={(e) => setCarPlate(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="emergencyContact">Emergency Contact</label>
          <input
            id="emergencyContact"
            type="text"
            value={emergencyContact}
            onChange={(e) => setEmergencyContact(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="dateAdded">Date Added</label>
          <input
            id="dateAdded"
            type="date"
            value={dateAdded}
            onChange={(e) => setDateAdded(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="notes">Other Notes</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <div className={styles.buttonContainer}>
          <button className={buttonstyles.closeBtn} onClick={handleClose}>
            Cancel
          </button>
          <button className={buttonstyles.primaryBtn} type="submit">
            + Add
          </button>
        </div>
      </form>
      {showSuccess && <SuccessDialog onClose={handleClose} />}
    </div>
  );
};

export default AddUserForm;
