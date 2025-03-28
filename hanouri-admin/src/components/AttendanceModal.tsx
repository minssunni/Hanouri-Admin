import React, { useState } from 'react';
import styles from '../styles/AttendanceModal.module.css';

const AttendanceModal = ({ selectedDate, onClose, onSave }) => {
  const [attendance, setAttendance] = useState([
    { id: 1, studentName: 'Student 1', present: false },
    { id: 2, studentName: 'Student 2', present: false },
    { id: 3, studentName: 'Student 3', present: false },
    // Add more students as needed
  ]);
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
          {attendance.map((student) => (
            <li key={student.id}>
              <label>
                <input
                  type="checkbox"
                  checked={student.present}
                  onChange={() => handleCheckboxChange(student.id)}
                />
                {student.studentName}
              </label>
            </li>
          ))}
        </ul>
        <div>
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceModal;
