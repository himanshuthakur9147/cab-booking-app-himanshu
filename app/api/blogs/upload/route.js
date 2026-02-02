import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("Cloudinary Config:", process.env.CLOUDINARY_CLOUD_NAME);
export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    console.log("file upload request received",file);
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Convert file to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudinary using a Promise
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "yatra_blogs",
          resource_type: "auto", // Automatically detects image/video
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary Logic Error:", error); // Check your terminal!
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      
      uploadStream.end(buffer);
    });

    return NextResponse.json({ 
      success: true, 
      url: result.secure_url 
    });

  } catch (error) {
    // THIS WILL SHOW YOU THE REAL ERROR IN YOUR TERMINAL
    console.error("Upload API Route Error:", error);
    
    return NextResponse.json({ 
      error: "Upload failed", 
      details: error.message 
    }, { status: 500 });
  }
}