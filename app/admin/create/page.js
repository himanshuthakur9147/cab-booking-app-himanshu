'use client';

import { useState, useEffect } from 'react';
import TiptapEditor from '@/components/editor/TiptapEditor';
import { useToast } from '@/context/ToastContext';
import { useRouter } from 'next/navigation';
import { useAuth } from "@/context/AuthContext"; 
import { FaCloudUploadAlt, FaTimes, FaCamera } from 'react-icons/fa';

export default function CreatePost() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const { showToast } = useToast();

  // --- Form States ---
  const [title, setTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [content, setContent] = useState(null);
  
  // Author States
  const [author, setAuthor] = useState('');
  const [authorDesc, setAuthorDesc] = useState('');
  const [authorImg, setAuthorImg] = useState('');

  const [isPublishing, setIsPublishing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // --- AUTH PROTECTION LOGIC (Exactly as requested) ---
  useEffect(() => {
    const checkAccess = async () => {
      // 1. Wait until Auth is initialized (checking if we have user data)
      if (!isAuthenticated || !user) {
        showToast("Access denied. Redirecting...", "error");
        router.push("/");
        return;
      }

      // 2. Check roles: Allow only 'admin' or 'member'
      const userRole = user?.user?.role || user?.role;
      
      if (userRole === "admin" || userRole === "member") {
        showToast("Access successful. Welcome back!", "success");
      } else {
        showToast("Access denied. Insufficient permissions.", "error");
        router.push("/");
      }
    };

    checkAccess();
  }, [isAuthenticated, user, router]);

  // --- AUTHOR AUTO-LOAD LOGIC ---
  useEffect(() => {
    const userPhone = user?.user?.phone || user?.phone;
    if (isAuthenticated && userPhone) {
      const savedData = localStorage.getItem(`author_${userPhone}`);
      if (savedData) {
        const parsed = JSON.parse(savedData);
        setAuthor(parsed.name || '');
        setAuthorDesc(parsed.desc || '');
        setAuthorImg(parsed.img || '');
      }
    }
  }, [isAuthenticated, user]);

  const saveAuthorLocally = () => {
    const userPhone = user?.user?.phone || user?.phone;
    if (!author || !authorDesc || !authorImg || !userPhone) {
      showToast("Please fill all author details before saving profile", "error");
      return;
    }
    const authorData = {
      name: author,
      desc: authorDesc,
      img: authorImg,
      phone: userPhone
    };
    localStorage.setItem(`author_${userPhone}`, JSON.stringify(authorData));
    showToast("Profile remembered for this account!", "success");
  };

  // --- CLOUDINARY LOGIC ---
  const handleUpload = (type) => {
    if (isUploading) return;
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dhaae7rgr";
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "yatra_blogs";

    setIsUploading(true);
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName,
        uploadPreset,
        sources: ['local', 'url', 'camera'],
        multiple: false,
        cropping: type === 'author',
        croppingAspectRatio: type === 'author' ? 1 : null,
        folder: 'yatra_blogs',
      },
      (error, result) => {
        if (result.event === "close") setIsUploading(false);
        if (!error && result && result.event === "success") {
          if (type === 'cover') setCoverImage(result.info.secure_url);
          if (type === 'author') setAuthorImg(result.info.secure_url);
          setIsUploading(false);
          showToast(`${type} image uploaded!`, "success");
        }
      }
    );
    myWidget.open();
  };

  const saveBlog = async () => {
    if (!title || !metaDescription || !content || !coverImage || !author || !authorDesc || !authorImg) {
      showToast("All fields are required!", "error");
      return;
    }

    setIsPublishing(true);
    try {
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, metaDescription, author, authorDesc, coverImage, authorImg, content }),
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

  // Loading state while auth is being verified
  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 pb-20">
      <div className="flex justify-between items-center mb-10 border-b pb-5">
        <h1 className="text-xl font-bold text-gray-800 uppercase tracking-widest">Create New Blog</h1>
        <div className="text-right">
           <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold uppercase">
             { (user?.user?.role || "USER") } Verified
           </span>
        </div>
      </div>

      {/* --- 1. COVER IMAGE --- */}
      <div className="mb-8">
        <label className="text-xs font-bold uppercase text-gray-400 mb-2 block">Blog Cover Image</label>
        {!coverImage ? (
          <button onClick={() => handleUpload('cover')} disabled={isUploading} type="button" className="w-full border-2 border-dashed rounded-2xl p-12 transition-all flex flex-col items-center gap-4 border-gray-200 bg-gray-50 hover:bg-white hover:border-orange-500">
            <FaCloudUploadAlt className="text-4xl text-orange-500" />
            <p className="text-sm font-bold text-gray-700">Upload Main Banner</p>
          </button>
        ) : (
          <div className="relative rounded-2xl overflow-hidden aspect-[16/8] border-4 border-white shadow-xl">
            <img src={coverImage} className="w-full h-full object-cover" alt="Cover" />
            <button onClick={() => setCoverImage('')} className="absolute top-4 right-4 bg-white text-red-500 p-2 rounded-full shadow-lg"><FaTimes /></button>
          </div>
        )}
      </div>

      {/* --- 2. TITLE --- */}
      <input 
        type="text" 
        placeholder="Blog Title..." 
        className="text-4xl font-bold w-full mb-6 outline-none border-b-2 border-transparent focus:border-orange-200 py-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* --- 3. SEO DESCRIPTION --- */}
      <div className="mb-8">
        <label className="text-xs font-bold uppercase text-gray-400 mb-2 block">SEO Meta Description ({metaDescription.length}/160)</label>
        <textarea
          placeholder="Brief summary for Google search results..."
          className="w-full p-4 bg-gray-50 rounded-xl border outline-none text-sm"
          rows={2}
          maxLength={160}
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
        />
      </div>

      {/* --- 4. AUTHOR DETAILS SECTION --- */}
      <div className="mb-10 p-6 bg-orange-50/50 rounded-2xl border border-orange-100 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <label className="text-xs font-bold uppercase text-orange-600">Author Profile</label>
          <button 
            onClick={saveAuthorLocally} 
            type="button" 
            className="text-[10px] bg-orange-500 text-white px-4 py-2 rounded-full font-bold hover:bg-orange-600 shadow-md transition-all active:scale-95"
          >
            Save as My Default Profile
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 flex flex-col items-center justify-center border-r border-orange-100 pr-4">
             <label className="text-[10px] font-bold uppercase text-orange-400 mb-2">Author Image</label>
             {!authorImg ? (
               <button onClick={() => handleUpload('author')} className="w-24 h-24 rounded-full border-2 border-dashed border-orange-300 flex items-center justify-center bg-white text-orange-400 hover:text-orange-600">
                 <FaCamera size={24} />
               </button>
             ) : (
               <div className="relative">
                  <img src={authorImg} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md" alt="Author" />
                  <button onClick={() => setAuthorImg('')} className="absolute -top-1 -right-1 bg-red-500 text-white p-1 rounded-full text-[10px] shadow-sm"><FaTimes /></button>
               </div>
             )}
          </div>

          <div className="md:col-span-2 space-y-4">
            <div>
              <label className="text-[10px] font-bold uppercase text-orange-400 mb-1 block">Author Name</label>
              <input 
                type="text" 
                placeholder="Name shown on blog" 
                className="w-full bg-white p-2 rounded border border-orange-100 outline-none text-sm focus:border-orange-400"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase text-orange-400 mb-1 block">Author Bio ({authorDesc.length}/160)</label>
              <textarea 
                placeholder="A short bio about you..." 
                className="w-full bg-white p-2 rounded border border-orange-100 outline-none text-sm focus:border-orange-400"
                rows={2}
                maxLength={160}
                value={authorDesc}
                onChange={(e) => setAuthorDesc(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* --- 5. EDITOR --- */}
      <div className="mb-10">
        <label className="text-xs font-bold uppercase text-gray-400 mb-2 block">Blog Content</label>
        <TiptapEditor onChange={setContent} />
      </div>
      
      {/* --- 6. PUBLISH --- */}
      <div className="flex justify-end">
        <button 
          onClick={saveBlog}
          disabled={isPublishing || isUploading}
          className={`px-12 py-4 rounded-full font-bold text-white shadow-xl transition-all flex items-center gap-3 text-lg
            ${(isPublishing || isUploading) ? "bg-gray-400 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600 active:scale-95"}`}
        >
          {isPublishing ? "Publishing..." : "Publish Blog"}
        </button>
      </div>
    </div>
  );
}