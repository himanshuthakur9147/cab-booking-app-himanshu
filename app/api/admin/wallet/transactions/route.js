import { NextResponse } from "next/server";
import  connectDB  from "@/lib/db";
import Wallet from "@/models/Wallet";


export async function GET(req) {
  await connectDB();


  const transactions = await Wallet.find()
    .populate("userId", "name phone email") // wallet owner
    .populate("doneBy", "name email")       // admin
    .sort({ createdAt: 1 }); // chronological order

  return NextResponse.json(transactions);
}
