import dbConnect from "@/lib/db";
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();
    const newBlog = await Blog.create(data);
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}