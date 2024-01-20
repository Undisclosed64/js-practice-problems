const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://undisclosed674:3ranIw5HcPtkurJM@cluster0.l0iav83.mongodb.net/?retryWrites=true&w=majority"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: { type: String },
  password: { type: String },
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: { type: String },
  password: { type: String },
});

const CourseSchema = new mongoose.Schema(
  {
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    imgLink: String,
  },
  { strict: false }
);

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
