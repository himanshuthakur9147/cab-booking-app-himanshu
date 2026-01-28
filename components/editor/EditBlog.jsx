"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import TiptapEditor from "@/components/editor/TiptapEditor";
import { useToast } from "@/context/ToastContext";
import { useAuth } from "@/context/AuthContext";

export default function EditBlog() {
  const { id } = useParams(); // Get the blog ID from URL
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  const { showToast } = useToast();

  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  // 1. Fetch Existing Data
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        const data = await res.json();
        if (res.ok) {
          setTitle(data.title);
          setCoverImage(data.coverImage);
          setMetaDescription(data.metaDescription);
          setContent(data.content); // Tiptap will need to handle this as initial content
        }
      } catch (err) {
        showToast("Error loading blog", "error");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchBlog();
  }, [id]);

  const handleUpdate = async () => {
    setIsUpdating(true);
    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, coverImage, metaDescription, content }),
      });

      if (res.ok) {
        showToast("Blog Updated!", "success");
        router.push("/blogs");
      }
    } catch (error) {
      showToast("Update failed", "error");
    } finally {
      setIsUpdating(false);
    }
  };

  if (loading) return <p>Loading Editor...</p>;

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-2xl font-bold mb-6">Edit Blog Post</h1>
      
      <input 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        className="text-3xl font-bold w-full mb-4 outline-none border-b"
        placeholder="Blog Title"
      />

      <input 
        value={coverImage} 
        onChange={(e) => setCoverImage(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        placeholder="Cover Image URL"
      />

      <textarea 
        value={metaDescription} 
        onChange={(e) => setMetaDescription(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        placeholder="Meta Description"
      />

      {/* Pass initialContent to Tiptap so it loads the saved JSON */}
      <TiptapEditor initialContent={content} onChange={setContent} />

      <button 
        onClick={handleUpdate}
        disabled={isUpdating}
        className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-bold"
      >
        {isUpdating ? "Saving..." : "Update Blog"}
      </button>
    </div>
  );
}