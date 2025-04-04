import React, { useState } from 'react';
import styles from '../styles/AttendanceModal.module.css';
import { mokwonList } from '../mockData/draftMokwonList';

const AttendanceModal = ({ selectedDate, onClose, onSave }) => {
  const [attendance, setAttendance] = useState(mokwonList);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxChange = (id) => {
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
    setSelectAll(allSelected);
  };

  const handleSelectAll = () => {
    const allPresent = !selectAll;
    const updatedAttendance = attendance.map((item) => ({
      ...item,
      present: allPresent,
    }));
    setAttendance(updatedAttendance);
    setSelectAll(allPresent);
  };

  const handleSave = () => {
    onSave();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h3>Attendance for {selectedDate.toDateString()}</h3>
        <ul>
          <li>
            <label>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
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
                  onChange={() => handleCheckboxChange(mokwon.id)}
                />
                {mokwon.name}
              </label>
            </li>
          ))}
        </ul>
        <div>
          <button className="buttonSmall" onClick={handleSave}>Save</button>
          <button className="buttonSmall" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceModal;
