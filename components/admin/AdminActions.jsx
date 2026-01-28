'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

export default function AdminActions({ blogId }) {
  // Use optional chaining and default values to be safe
  const { user, isAuthenticated } = useAuth();
  const [showConfirm, setShowConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  // SAFETY CHECK: 
  // We return null if:
  // - Not authenticated
  // - User data hasn't loaded yet
  // - User is neither an admin nor a member
  const userRole = user?.role;
  const hasAccess = isAuthenticated && (userRole === "admin" || userRole === "member");

  if (!hasAccess) return null;

  const handleDelete = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/blogs/${blogId}`, { method: 'DELETE' });
      if (res.ok) {
        router.refresh(); 
      }
    } catch (err) {
      alert("Failed to delete");
    } finally {
      setIsDeleting(false);
      setShowConfirm(false);
    }
  };

  return (
    <div className="absolute top-4 right-4 flex gap-2 z-20">
      <button 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          router.push(`/admin/edit/${blogId}`);
        }}
        className="bg-white/90 p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-md"
      >
        <FaPencilAlt size={14} />
      </button>

      <button 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setShowConfirm(true);
        }}
        className="bg-white/90 p-2 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-md"
      >
        <FaTrash size={14} />
      </button>

      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] backdrop-blur-sm p-4">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Are you sure?</h3>
            <p className="text-gray-500 mb-6 text-sm">
              This will permanently delete this blog post. This action cannot be undone.
            </p>
            <div className="flex gap-4">
              <button 
                disabled={isDeleting}
                onClick={() => setShowConfirm(false)}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-full font-semibold hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                disabled={isDeleting}
                onClick={handleDelete}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 disabled:bg-gray-400"
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}