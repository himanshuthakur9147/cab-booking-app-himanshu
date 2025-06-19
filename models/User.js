// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    phone: { type: Number, required: true, unique: true },
    name: { type: String,default:"" }, // Optional: extend later
    email: { type: String,default:"" }, // Optional: extend later
    allow_whatsapp: { type: Boolean }, // Optional: extend later
    role: { type: String, default:"customer" }, // Optional: extend later

    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
