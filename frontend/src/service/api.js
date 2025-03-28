import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// Login function
export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

// Get attendance for a specific date
export const getAttendance = async (date, token) => {
  const response = await axios.get(`${API_URL}/attendance?date=${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Update attendance
export const updateAttendance = async (attendanceData, token) => {
  const response = await axios.post(`${API_URL}/attendance/update`, attendanceData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
