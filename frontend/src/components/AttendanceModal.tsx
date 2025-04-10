import React, { useState } from 'react';
import styles from '../styles/Modal.module.css';
import { mokwonList } from '../mockData/draftMokwonList';

const AttendanceModal = ({ selectedDate, onClose, onSave }) => {
  const [attendance, setAttendance] = useState(mokwonList);
  const [selectAllPresent, setSelectAllPresent] = useState(false);

  const handlAllPresentCheckboxChange = (id) => {
    const updatedAttendance = attendance.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          present: !item.present,
        };
      }
      return item;
    });
    setAttendance(updatedAttendance);

    const allSelected = updatedAttendance.every((item) => item.present);
    setSelectAllPresent(allSelected);
  };

  const handleSelectAllPresent = () => {
    const allPresent = !selectAllPresent;
    const updatedAttendance = attendance.map((item) => ({
      ...item,
      present: allPresent,
    }));
    setAttendance(updatedAttendance);
    setSelectAllPresent(allPresent);
  };

  const handleSave = () => {
    onSave();
  };

  return (
    <div className={styles.modal}>
      <div>
        <h3>Attendance for {selectedDate.toDateString()}</h3>
        <ul>
          <li>
            <label>
              <input
                type="checkbox"
                checked={selectAllPresent}
                onChange={handleSelectAllPresent}
              />
              Select All
            </label>
          </li>
          {attendance.map((mokwon) => (
            <li key={mokwon.id}>
              <label>
                <input
                  type="checkbox"
                  checked={mokwon.present}
                  onChange={() => handlAllPresentCheckboxChange(mokwon.id)}
                />
                {mokwon.name}
              </label>
            </li>
          ))}
        </ul>
        <div className={styles.buttonContainer}>
          <button onClick={handleSave}>Save</button>
          <button className="buttonSecondary" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceModal;
