const mongoose = require("mongoose");
const validator = require("validator");

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"]
  },
  email: {
    type: String,
    required: [true, "A user must have a email"],
    validate: [validator.isEmail,"Please enter a valid email"],
    unique: true
  },
  phone: {
    type: String,
    required: true,
    validate: [validator.isMobilePhone,"Please enter a valid phone"],
    unique: true
  },
  description: {
    type: String,
    required: [true, "Enter description for the contact"]
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
