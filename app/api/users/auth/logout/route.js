// app/api/users/auth/logout/route.js
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore =await  cookies();
 await cookieStore.delete("session"); // clear the session cookie
  return NextResponse.json({ success: true });
}
