import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  jwtToken: {
    type: String,
  },
  jwtTokenExpiry: {
    type: Date,
  },
});

const userModel = mongoose.models.users || mongoose.model("users", userSchema);
export default userModel;
