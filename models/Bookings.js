// models/Bookings.js
import mongoose from "mongoose";
import User from "./User";
import Cabs from "./Cabs";
const BookingSchema = new mongoose.Schema(
  {
    pickup_address:String,
    drop_address:String,
    pickup_date:String,
    pickup_time:String,
    return_date:String,
    name:String,
    email:String,
    rentalType:String,
    effective_distance:Number,
    duration:String,
    paid_amount:Number,
    total_estimate_fare:Number,
    service_type:{type:String,default:"One Way"},
    payment_id:String,
    order_id:String,
    payment_status:String,
    booked_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        require:true
    },
    cab_type:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Cabs,
        required:true
    },
    booked_at:{type:Date,default:Date.now}


  },
  { timestamps: true }
);

export default mongoose.models.Bookings || mongoose.model("Bookings", BookingSchema);
