// const express = require('express');
// const { authenticate, authorize } = require('../middleware/auth');
// const { getAttendanceByDate, updateAttendance } = require('../controllers/attendanceController');

// const router = express.Router();

// router.get('/attendance', authenticate, authorize(['Admin', 'Leader']), getAttendanceByDate);
// router.post('/attendance/update', authenticate, authorize(['Admin', 'Leader']), updateAttendance);

// module.exports = router;


const express = require('express');
const { getAttendanceByDate, updateAttendance } = require('../controllers/attendanceController');
const router = express.Router();

// Define the GET route for attendance
router.get('/attendance', getAttendanceByDate); // Make sure getAttendanceByDate is a valid function

// Define other routes as needed
router.post('/attendance/update', updateAttendance); // Make sure updateAttendance is a valid function

module.exports = router;
