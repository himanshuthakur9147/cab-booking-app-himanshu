'use client';

import React, { useEffect } from 'react'; // Grouped with React
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Image as TiptapImage } from '@tiptap/extension-image';
import { Link } from '@tiptap/extension-link';
import { Underline } from '@tiptap/extension-underline';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { TextAlign } from '@tiptap/extension-text-align';
import { Highlight } from '@tiptap/extension-highlight';
import { Placeholder } from '@tiptap/extension-placeholder';

import EditorToolbar from './EditorToolbar';

const TiptapEditor = ({ onChange, initialContent }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: { keepMarks: true },
        orderedList: { keepMarks: true },
      }),
      TiptapImage.configure({
        allowBase64: true,
        HTMLAttributes: {
          class: 'rounded-xl shadow-lg border border-gray-200 my-6 max-w-full h-auto',
        },
      }),
      Underline,
      TextStyle,
      Color,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Highlight.configure({ multicolor: true }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class: 'text-blue-600 underline cursor-pointer',
        },
      }),
      Placeholder.configure({
        placeholder: 'Start writing your travel story here...',
      }),
    ],
    content: initialContent || '',
    onUpdate: ({ editor }) => {
      // Send the JSON content back to the parent state
      onChange(editor.getJSON());
    },
    editorProps: {
      attributes: {
        class: 'tiptap prose prose-lg max-w-none p-8 focus:outline-none bg-white min-h-[500px]',
      },
    },
    immediatelyRender: false, // Important for Next.js hydration
  });

  // CRITICAL: This effect syncs the editor with data fetched from your API
  useEffect(() => {
    if (editor && initialContent) {
      // We only set content if the editor is currently empty 
      // This prevents the editor from resetting while the user is typing
      const isEditorEmpty = editor.isEmpty;
      if (isEditorEmpty) {
        editor.commands.setContent(initialContent);
      }
    }
  }, [editor, initialContent]);

  // If the editor hasn't initialized yet, show a placeholder/loader
  if (!editor) {
    return <div className="p-8 border border-gray-200 rounded-xl bg-gray-50 animate-pulse">Loading Editor...</div>;
  }

  return (
    <div className="relative border border-gray-300 rounded-xl bg-white shadow-lg overflow-hidden">
      {/* 1. The Toolbar (Controls) */}
      <EditorToolbar editor={editor} />

      {/* 2. The Editable Area */}
      <div className="min-h-[600px] cursor-text">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TiptapEditor;