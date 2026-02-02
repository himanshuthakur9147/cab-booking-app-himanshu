'use client';

import { useState, useEffect,useRef } from 'react';
import TiptapEditor from '@/components/editor/TiptapEditor';
import { useToast } from '@/context/ToastContext';
import { useRouter } from 'next/navigation';
import { useAuth } from "@/context/AuthContext"; 
import { FaImage,FaCloudUploadAlt,FaTimes } from 'react-icons/fa';

export default function CreatePost() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const { showToast } = useToast();

  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [content, setContent] = useState(null);
  const [isPublishing, setIsPublishing] = useState(false);
  // New State for Uploading
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  console.log("User in CreatePost:", user);
  useEffect(() => {
    const checkAccess = async () => {
      // 1. Wait until Auth is initialized
     

      // 2. If authenticated, check roles
      if (isAuthenticated && user) {
       
          // Verify if user is still an admin/member in the DB
          if (user?.user.role !== "admin" && user?.user.role !== "member") {
            showToast("Access successful. Redirecting...", "success");
          }
      } else {
        showToast("Access denied. Redirecting...", "error");
        router.push("/");
      }
    };

    checkAccess();
  }, [isAuthenticated, user, router]);


  // --- IMAGE UPLOAD LOGIC ---
  const handleFileUpload = async (file) => {
    if (!file) return;
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      showToast("Please upload an image file", "error");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      // Replace '/api/upload' with your actual upload endpoint (Cloudinary/S3/etc)
      const res = await fetch('/api/blogs/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setCoverImage(data.url); // Set the returned URL to state
        showToast("Image uploaded successfully", "success");
      } else {
        showToast("Upload failed", "error");
      }
    } catch (error) {
      showToast("Error uploading image", "error");
    } finally {
      setIsUploading(false);
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => setIsDragging(false);

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const saveBlog = async () => {
    if (!title || !metaDescription || !content || !coverImage) {
      showToast("Please fill in all fields", "error");
      return;
    }

    setIsPublishing(true);
    try {
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, coverImage, metaDescription, content }),
      });

      if (res.ok) {
        showToast("Blog Published Successfully!", "success");
        setTimeout(() => router.push('/blogs'), 1500);
      } else {
        showToast("Failed to publish", "error");
      }
    } catch (error) {
      showToast("An error occurred", "error");
    } finally {
      setIsPublishing(false);
    }
  };

  // 3. IMPORTANT: Prevent crash during build/loading
  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-10 pb-20">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-xl font-bold text-gray-800 uppercase tracking-widest">Editor Mode</h1>
        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">
          {/* Use optional chaining and ensure property path is correct */}
          {(user?.user.role || "USER").toUpperCase()} Verified
        </span>
      </div>

     {/* --- REPLACED COVER IMAGE SECTION --- */}
      <div className="mb-8 group">
        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
          Cover Image
        </label>
        
        {!coverImage ? (
          <div
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onClick={() => fileInputRef.current.click()}
            className={`relative border-2 border-dashed rounded-2xl p-12 transition-all cursor-pointer flex flex-col items-center justify-center gap-4
              ${isDragging ? "border-orange-500 bg-orange-50" : "border-gray-200 bg-gray-50 hover:border-orange-300 hover:bg-white"}
              ${isUploading ? "opacity-50 pointer-events-none" : ""}`}
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              onChange={(e) => handleFileUpload(e.target.files[0])}
              accept="image/*"
            />
            
            {isUploading ? (
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-orange-500 mb-2"></div>
                <p className="text-sm text-gray-500 font-medium">Uploading high-quality image...</p>
              </div>
            ) : (
              <>
                <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-2xl">
                  <FaCloudUploadAlt />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-gray-700">Click or drag & drop</p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG or WebP (Recommended 1600x900)</p>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="relative rounded-2xl overflow-hidden aspect-[16/7] border border-gray-200 shadow-lg group">
            <img src={coverImage} alt="Preview" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button 
                onClick={() => setCoverImage('')}
                className="bg-white/20 hover:bg-red-500 text-white p-3 rounded-full backdrop-blur-md transition-all"
              >
                <FaTimes />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
               <input 
                type="text" 
                className="w-full px-3 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] text-gray-500 outline-none border-none shadow-sm"
                value={coverImage}
                readOnly
              />
            </div>
          </div>
        )}
      </div>

      {/* Title */}
      <input 
        type="text" 
        placeholder="Blog Title..." 
        className="text-4xl font-bold w-full mb-6 outline-none border-b-2 border-transparent focus:border-orange-200 transition-colors py-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Meta Description */}
      <div className="mb-8">
        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">SEO Meta Description ({metaDescription.length}/160)</label>
        <textarea
          placeholder="SEO description..."
          className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 outline-none text-sm italic"
          rows={2}
          maxLength={160}
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
        />
      </div>
      
      {/* Editor */}
      <div className="mb-10">
        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">Content</label>
        <TiptapEditor onChange={setContent} />
      </div>
      
      {/* Publish Button */}
      <div className="flex justify-end">
        <button 
          onClick={saveBlog}
          disabled={isPublishing}
          className={`px-12 py-4 rounded-full font-bold text-white shadow-xl transition-all flex items-center gap-3 text-lg
            ${isPublishing ? "bg-gray-400" : "bg-orange-500 hover:bg-orange-600 active:scale-95"}`}
        >
          {isPublishing ? "Publishing..." : "Publish Blog"}
        </button>
      </div>
    </div>
  );
}