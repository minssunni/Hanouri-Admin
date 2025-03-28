import React, { useState } from 'react';
import AttendanceModal from './AttendanceModal';

const SundayDatesList = () => {
  const startDate = new Date(); // Set the desired start date
  startDate.setHours(0, 0, 0, 0); // Start from the beginning of the day

  const endDate = new Date(); // Set the desired end date
  endDate.setMonth(endDate.getMonth() + 6); // Set end date 6 months from the start date

  const sundays = [];
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    if (currentDate.getDay() === 0) {
      sundays.push(new Date(currentDate)); // Create a new instance to avoid reference issues
    }
    currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
  }

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleCloseModal = () => {
    setSelectedDate(null);
  };

  const handleSaveAttendance = () => {
    // Implement the logic to save the attendance data
    console.log('Attendance data:', selectedDate);
    handleCloseModal();
  };

  return (
    <div>
      <h2>Sunday Dates List</h2>
      <ul>
        {sundays.map((date) => (
          <li key={date.toISOString()}>
            <button onClick={() => handleDateClick(date)}>{date.toDateString()}</button>
          </li>
        ))}
      </ul>

      {selectedDate && (
        <AttendanceModal selectedDate={selectedDate} onClose={handleCloseModal} onSave={handleSaveAttendance} />
      )}
    </div>
  );
};


export default SundayDatesList;
