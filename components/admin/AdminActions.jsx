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
  const userRole = user?.user.role;
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
    <>
  {/* 1. HOVER BUTTONS: Hidden by default (opacity-0), shown on card hover */}
      <div className="absolute top-4 right-4 flex gap-2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            router.push(`/admin/edit/${blogId}`);
          }}
          className="bg-white/90 backdrop-blur-md p-2.5 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-xl border border-white/20"
        >
          <FaPencilAlt size={14} />
        </button>

        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowConfirm(true);
          }}
          className="bg-white/90 backdrop-blur-md p-2.5 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-xl border border-white/20"
        >
          <FaTrash size={14} />
        </button>
      </div>

      {/* 2. ENHANCED MODAL: Higher z-index and darker backdrop */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] backdrop-blur-md p-4">
          <div 
            className="bg-white p-8 rounded-[2rem] shadow-2xl max-w-sm w-full text-center animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()} // Prevents clicking through modal
          >
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
               <FaTrash size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Are you sure?</h3>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              This will permanently delete this blog post. This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button 
                disabled={isDeleting}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowConfirm(false);
                }}
                className="flex-1 px-6 py-3 border border-gray-200 rounded-2xl font-bold text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                disabled={isDeleting}
                onClick={handleDelete}
                className="flex-1 px-6 py-3 bg-red-600 text-white rounded-2xl font-bold hover:bg-red-700 shadow-lg shadow-red-200 transition-all disabled:bg-gray-400"
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
      </>
  );
}