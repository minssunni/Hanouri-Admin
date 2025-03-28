import React, { useState } from 'react';

const AttendanceModal = ({ selectedDate, onClose, onSave }) => {
    const [attendance, setAttendance] = useState([
      { id: 1, studentName: 'Student 1', present: false },
      { id: 2, studentName: 'Student 2', present: false },
      { id: 3, studentName: 'Student 3', present: false },
      // Add more students as needed
    ]);
  
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
  
    const handleSave = () => {
      onSave();
    };
  
    return (
      <div className="modal">
        <div className="modal-content">
          <h3>Attendance for {selectedDate.toDateString()}</h3>
          <ul>
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
