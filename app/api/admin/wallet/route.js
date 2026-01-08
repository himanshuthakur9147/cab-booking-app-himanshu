import { NextResponse } from "next/server";
import  connectDB  from "@/lib/db";
import User from "@/models/User";
import Wallet from "@/models/Wallet";


export async function POST(req) {
  await connectDB();
  const { userId, amount, type, reason,adminId } = await req.json();

 const session = await User.findById(adminId);
 if (!session || session.user.role !== "admin") {
   return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
 }


  if (!["credit", "debit"].includes(type)) {
    return NextResponse.json({ message: "Invalid type" }, { status: 400 });
  }

  const user = await User.findById(userId);
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  if (type === "debit" && user.walletBalance < amount) {
    return NextResponse.json(
      { message: "Insufficient balance" },
      { status: 400 }
    );
  }

  // Update wallet
  user.walletBalance =
    type === "credit"
      ? user.walletBalance + amount
      : user.walletBalance - amount;

  await user.save();

  // Log transaction
  await Wallet.create({
    userId,
    type,
    amount,
    reason,
    doneBy: adminId,
  });

  return NextResponse.json({
    message: "Wallet updated successfully",
    balance: user.walletBalance,
    status:200
  });
}
