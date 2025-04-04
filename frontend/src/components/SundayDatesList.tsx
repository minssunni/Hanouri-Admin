import React, { useState } from 'react';
import AttendanceModal from './AttendanceModal';
import ExpandLessIcon from '@mui/icons-material/ExpandLess'; // Import the ExpandLessIcon
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import the ExpandLessIcon

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
    if (selectedDate && selectedDate.toISOString() === date.toISOString()) {
      // If the selected date is the same as the current date button, close the modal
      setSelectedDate(null);
    } else {
      // If a different date or no date is selected, open the modal for the clicked date
      setSelectedDate(date);
    }
  };

  const handleCloseModal = () => {
    setSelectedDate(null);
  };

  const handleSaveAttendance = () => {
    console.log('Attendance data:', selectedDate);
    handleCloseModal();
  };

  return (
    <div>
      <h2>Sunday Dates List</h2>
      <ul>
        {sundays.map((date) => (
          <li key={date.toISOString()}>
            <button
              className="buttonList"
              onClick={() => handleDateClick(date)}
            >
            {selectedDate && selectedDate.toISOString() === date.toISOString() ? (
              <ExpandLessIcon /> // Display the ExpandLessIcon if selected
            ) : (
              <ExpandMoreIcon /> // Display the ExpandMoreIcon initially
            )}
              {date.toDateString()}
            </button>
            {selectedDate && selectedDate.toISOString() === date.toISOString() && (
              <AttendanceModal
                selectedDate={selectedDate}
                onClose={handleCloseModal}
                onSave={handleSaveAttendance}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SundayDatesList;
