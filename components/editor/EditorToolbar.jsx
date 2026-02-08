'use client';
import React from 'react';
import { 
  FaBold, FaItalic, FaUnderline, FaStrikethrough, FaListUl, FaListOl, 
  FaQuoteLeft, FaUndo, FaRedo, FaLink, FaImage, FaAlignLeft, FaAlignCenter, FaAlignRight 
} from 'react-icons/fa';
import { MdFormatColorText, MdOutlineFormatColorFill } from 'react-icons/md';

const EditorToolbar = ({ editor }) => {
  if (!editor) return null;

  const btnClass = (active) => `p-2 rounded transition-all duration-200 ${
    active ? 'bg-blue-100 text-blue-600 shadow-sm' : 'text-gray-600 hover:bg-gray-100'
  }`;

  const setLink = () => {
    const url = window.prompt('Enter URL');
    if (url) editor.chain().focus().setLink({ href: url }).run();
  };

  // --- UPDATED: Cloudinary Integration for Editor Body ---
  const addImage = () => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dhaae7rgr";
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "yatra_blogs";

    if (!window.cloudinary) {
      alert("Cloudinary library not loaded yet.");
      return;
    }

    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        sources: ['local', 'url', 'camera'],
        multiple: false,
        folder: 'blog_content_images', // Different folder to organize inner blog images
        clientAllowedFormats: ['png', 'jpeg', 'webp'],
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const url = result.info.secure_url;
          
          // Insert into Tiptap
          if (editor.commands.setImage) {
            editor.chain().focus().setImage({ src: url, alt: 'Blog Image' }).run();
          } else {
            // Fallback for custom schemas
            editor.chain().focus().insertContent({
              type: 'image',
              attrs: { src: url, alt: 'Blog Image' }
            }).run();
          }
        }
      }
    );

    myWidget.open();
  };

  // Professional Color Palette
  const colors = [
    { name: 'Black', hex: '#000000' },
    { name: 'Red 600', hex: '#dc2626' },
    { name: 'Blue 600', hex: '#2563eb' },
    { name: 'Indigo 600', hex: '#4f46e5' },
    { name: 'Green 600', hex: '#16a34a' },
  ];

  return (
    <div className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm flex flex-col">
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-100">
        <button onClick={() => editor.chain().focus().undo().run()} className={btnClass()}><FaUndo size={14} /></button>
        <button onClick={() => editor.chain().focus().redo().run()} className={btnClass()}><FaRedo size={14} /></button>
        <div className="w-px h-6 bg-gray-200 mx-1" />
        
        <button onClick={() => editor.chain().focus().toggleBold().run()} className={btnClass(editor.isActive('bold'))}><FaBold size={14} /></button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className={btnClass(editor.isActive('italic'))}><FaItalic size={14} /></button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={btnClass(editor.isActive('underline'))}><FaUnderline size={14} /></button>
        
        <div className="w-px h-6 bg-gray-200 mx-1" />
        
        <button onClick={() => editor.chain().focus().setTextAlign('left').run()} className={btnClass(editor.isActive({ textAlign: 'left' }))}><FaAlignLeft size={14} /></button>
        <button onClick={() => editor.chain().focus().setTextAlign('center').run()} className={btnClass(editor.isActive({ textAlign: 'center' }))}><FaAlignCenter size={14} /></button>
        <button onClick={() => editor.chain().focus().setTextAlign('right').run()} className={btnClass(editor.isActive({ textAlign: 'right' }))}><FaAlignRight size={14} /></button>

        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={btnClass(editor.isActive('bulletList'))}><FaListUl /></button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={btnClass(editor.isActive('orderedList'))}><FaListOl /></button>
        
        <div className="w-px h-6 bg-gray-200 mx-1" />
        
        <button onClick={setLink} className={btnClass(editor.isActive('link'))}><FaLink size={14} /></button>
        <button onClick={addImage} className={btnClass()}><FaImage size={14} /></button>
      </div>

      <div className="flex flex-wrap items-center gap-2 p-2 bg-gray-50/50">
        <div className="flex items-center gap-1 mr-4">
          <MdFormatColorText className="text-gray-400 mr-1" size={18} />
          {colors.map((color) => (
            <button
              key={color.hex}
              title={color.name}
              onClick={() => editor.chain().focus().setColor(color.hex).run()}
              className={`w-6 h-6 rounded-full border border-white shadow-sm hover:scale-110 transition-transform ${
                editor.isActive('textStyle', { color: color.hex }) ? 'ring-2 ring-offset-1 ring-blue-400' : ''
              }`}
              style={{ backgroundColor: color.hex }}
            />
          ))}
          <button onClick={() => editor.chain().focus().unsetColor().run()} className="text-[10px] ml-1 text-gray-400 hover:underline uppercase font-bold">Clear</button>
        </div>
        <div className="w-px h-6 bg-gray-200 mx-1" />
        <button 
          onClick={() => editor.chain().focus().toggleHighlight({ color: '#fef08a' }).run()} 
          className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-all ${
            editor.isActive('highlight') ? 'bg-yellow-200 text-yellow-800' : 'text-gray-500 hover:bg-gray-200'
          }`}
        >
          <MdOutlineFormatColorFill size={16} /> Highlight
        </button>
      </div>
    </div>
  );
};

export default EditorToolbar;