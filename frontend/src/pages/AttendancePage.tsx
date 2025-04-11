import { useState } from "react";
import AttendanceModal from "../components/AttendanceModal";
import BackButton from "../components/BackButton";
import buttonStyles from "../styles/Button.module.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SundayDatesList = () => {
  const startDate = new Date();
  startDate.setHours(0, 0, 0, 0);

  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + 6);

  const sundays = [];
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    if (currentDate.getDay() === 0) {
      sundays.push(new Date(currentDate));
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateClick = (date: Date) => {
    if (selectedDate && selectedDate.toISOString() === date.toISOString()) {
      setSelectedDate(null);
    } else {
      setSelectedDate(date);
    }
  };

  const handleCloseModal = () => {
    setSelectedDate(null);
  };

  const handleSaveAttendance = () => {
    console.log("Attendance data:", selectedDate);
    handleCloseModal();
  };

  return (
    <div>
      <BackButton />
      <h2>Attendance</h2>
      {sundays.map((date) => (
        <li key={date.toISOString()}>
          <button
            className={
              selectedDate && selectedDate.toISOString() === date.toISOString()
                ? buttonStyles.listBtnSelected
                : buttonStyles.listBtn
            }
            onClick={() => handleDateClick(date)}
          >
            {selectedDate &&
            selectedDate.toISOString() === date.toISOString() ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )}
            {date.toDateString()}
          </button>
          {selectedDate &&
            selectedDate.toISOString() === date.toISOString() && (
              <AttendanceModal
                selectedDate={selectedDate}
                onClose={handleCloseModal}
                onSave={handleSaveAttendance}
              />
            )}
        </li>
      ))}
    </div>
  );
};

export default SundayDatesList;
