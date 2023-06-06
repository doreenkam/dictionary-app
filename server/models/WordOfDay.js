const mongoose = require('mongoose');

const wordOfDaySchema = new mongoose.Schema({
  text: { type: String, required: true },
  date: { type: String, required: true },
});

module.exports = mongoose.model('WordOfDay', wordOfDaySchema);
