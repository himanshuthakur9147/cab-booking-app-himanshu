// app/api/hello/route.js

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "API Route is working!" });
}
