"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import TiptapEditor from '@/components/editor/TiptapEditor';
import { useToast } from '@/context/ToastContext';
import { useAuth } from "@/context/AuthContext";
import { FaImage, FaArrowLeft } from 'react-icons/fa';

export default function EditBlogPage() {
  const { id } = useParams(); // Gets the ID from the URL
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  const { showToast } = useToast();

  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [content, setContent] = useState(null);
  
  const [loading, setLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  // 1. PROTECTION & DATA FETCHING
  useEffect(() => {
    // Redirect if definitely not an admin or member
    if (isAuthenticated === false || (user && user.role !== "admin" && user.role !== "member")) {
      router.push("/");
      return;
    }

    const fetchBlogData = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        const data = await res.json();

        if (res.ok) {
          setTitle(data.title);
          setCoverImage(data.coverImage);
          setMetaDescription(data.metaDescription);
          setContent(data.content); // This is the JSON object for Tiptap
          setLoading(false);
        } else {
          showToast("Blog not found", "error");
          router.push("/admin/dashboard");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        showToast("Failed to load blog", "error");
      }
    };

    if (id && isAuthenticated) {
      fetchBlogData();
    }
  }, [id, isAuthenticated, user, router]);

  // 2. UPDATE FUNCTION
  const updateBlog = async () => {
    if (!title || !metaDescription || !content) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    setIsUpdating(true);
    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, coverImage, metaDescription, content }),
      });

      if (res.ok) {
        showToast("Blog Updated Successfully!", "success");
        router.push('/blogs');
      } else {
        showToast("Failed to update", "error");
      }
    } catch (error) {
      showToast("An error occurred", "error");
    } finally {
      setIsUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 pb-20">
      {/* Back Button */}
      <button 
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-colors"
      >
        <FaArrowLeft /> Back to Dashboard
      </button>

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-xl font-bold text-gray-800 uppercase tracking-widest">Edit Mode</h1>
        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold">Editing Post</span>
      </div>

      {/* Cover Image */}
      <div className="mb-8">
        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">Cover Image URL</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"><FaImage /></div>
          <input 
            type="text" 
            className="w-full pl-10 pr-3 py-3 bg-gray-50 rounded-xl border border-gray-200 outline-none text-sm"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
          />
        </div>
        {coverImage && (
          <div className="mt-4 rounded-2xl overflow-hidden aspect-[16/6] border border-gray-200">
            <img src={coverImage} alt="Preview" className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      {/* Title */}
      <input 
        type="text" 
        placeholder="Blog Title..." 
        className="text-4xl font-bold w-full mb-6 outline-none border-b-2 border-transparent focus:border-orange-200 py-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Meta Description */}
      <div className="mb-8">
        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">SEO Meta Description ({metaDescription.length}/160)</label>
        <textarea
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
        {/* Important: Passing the initial content fetched from DB */}
        <TiptapEditor initialContent={content} onChange={setContent} />
      </div>
      
      {/* Update Button */}
      <div className="flex justify-end">
        <button 
          onClick={updateBlog}
          disabled={isUpdating}
          className={`px-12 py-4 rounded-full font-bold text-white shadow-xl transition-all flex items-center gap-3 text-lg
            ${isUpdating ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700 active:scale-95"}`}
        >
          {isUpdating ? "Saving Changes..." : "Update Blog"}
        </button>
      </div>
    </div>
  );
}