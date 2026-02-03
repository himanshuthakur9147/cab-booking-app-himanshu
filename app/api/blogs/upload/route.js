import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

// 1. Correct Next.js App Router Config
// This tells Next.js to allow this function to run for up to 60 seconds
export const maxDuration = 60; 
export const dynamic = 'force-dynamic';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Convert file to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 2. Modern Stream Upload (Best for avoiding 499 Timeouts)
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "yatra_blogs",
          resource_type: "auto",
          // Explicitly set a long timeout for the Cloudinary connection
          timeout: 60000, 
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary Stream Error:", error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      // Write the buffer to the stream and end it
      uploadStream.end(buffer);
    });

    return NextResponse.json({ 
      success: true, 
      url: result.secure_url 
    });

  } catch (error) {
    console.error("Final Upload Error:", error);
    return NextResponse.json({ 
      error: "Upload failed", 
      details: error.message 
    }, { status: 500 });
  }
}