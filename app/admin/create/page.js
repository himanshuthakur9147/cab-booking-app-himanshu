'use client';

import { useState, useEffect } from 'react';
import TiptapEditor from '@/components/editor/TiptapEditor';
import { useToast } from '@/context/ToastContext';
import { useRouter } from 'next/navigation';
import { useAuth } from "@/context/AuthContext"; 
import { FaImage } from 'react-icons/fa';

export default function CreatePost() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const { showToast } = useToast();

  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [content, setContent] = useState(null);
  const [isPublishing, setIsPublishing] = useState(false);

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
          {(user?.role || "USER").toUpperCase()} Verified
        </span>
      </div>

      {/* Cover Image URL */}
      <div className="mb-8 group">
        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">Cover Image URL</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"><FaImage /></div>
          <input 
            type="text" 
            placeholder="Image URL..." 
            className="w-full pl-10 pr-3 py-3 bg-gray-50 rounded-xl border border-gray-200 outline-none text-sm"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
          />
        </div>
        {coverImage && (
          <div className="mt-4 rounded-2xl overflow-hidden aspect-[16/6] border-2 border-dashed border-gray-200">
            <img src={coverImage} alt="Preview" className="w-full h-full object-cover" />
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