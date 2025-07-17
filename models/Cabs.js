// models/Cabs.js
import mongoose from "mongoose";

const CabSchema = new mongoose.Schema(
  {

    name: { type: String,default:"" }, // Optional: extend later
    km_limit: { type: Number,default:0 }, // Optional: extend later
    per_km_fare: { type: Number }, // Optional: extend later
    tada: { type: Number }, // Optional: extend later
    night_charges:Number,
    seat_capacity:Number,
    one_way:Boolean,
    rental_service:{"8hr_80km":Number,"12hr_120km":Number},
    extra_charge_per_km:Number,
    image:String,
    priority: { type: Number, default: 0 }, // Optional: extend later
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.Cabs || mongoose.model("Cabs", CabSchema);
