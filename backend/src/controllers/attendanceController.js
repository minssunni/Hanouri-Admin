const Attendance = require('../models/Attendance');
const User = require('../models/User');

// Get attendance for a specific date
const getAttendanceByDate = async (req, res) => {
  const { date } = req.query; // Date format: YYYY-MM-DD
  const { role, groupId } = req.user;

  try {
    let attendance;

    if (role === 'Admin') {
      attendance = await Attendance.find({ date });
    } else if (role === 'Leader') {
      attendance = await Attendance.find({
        date,
        userId: { $in: await User.find({ groupId }).select('_id') },
      });
    }

    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching attendance' });
  }
  
};


const updateAttendance = (req, res) => {
  // Your logic to update attendance
  res.send("Attendance updated");
};

module.exports = { getAttendanceByDate, updateAttendance };
