'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
// Alias to avoid conflict with native window.Image
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
      // Use the aliased name here
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
        placeholder: 'If you’re wondering which city offers the best Christmas...',
      }),
    ],
    content: initialContent || '',
    onUpdate: ({ editor }) => {
      onChange(editor.getJSON());
    },
    editorProps: {
      attributes: {
        class: 'tiptap prose prose-lg max-w-none p-8 focus:outline-none bg-white min-h-[500px]',
      },
    },
    immediatelyRender: false,
  });

  return (
   <div className="relative border border-gray-300 rounded-xl bg-white shadow-lg">
    <EditorToolbar editor={editor} />
    {/* Notice we removed overflow-hidden from the main wrapper */}
    <div className="min-h-[600px]">
      <EditorContent editor={editor} />
    </div>
  </div>
  );
};

export default TiptapEditor;