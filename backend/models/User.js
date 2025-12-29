import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: String,

  role: {
    type: String,
    default: "user"
  }
});


export default mongoose.model("User", userSchema);
