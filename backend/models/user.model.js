import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://i0.wp.com/dianisa.com/wp-content/uploads/2022/08/8.-Profil-WA-Illustrasi.jpg?resize=1000%2C580&ssl=1",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
