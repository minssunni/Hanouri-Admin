const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Admin', 'Leader', 'Member'], required: true },
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' }, // Reference to group
});

module.exports = mongoose.model('User', userSchema);
