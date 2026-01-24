'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Underline } from '@tiptap/extension-underline';
import { Link } from '@tiptap/extension-link';
import { Image } from '@tiptap/extension-image';
import { TextAlign } from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { Highlight } from '@tiptap/extension-highlight';

const BlogRenderer = ({ content }) => {
  const editor = useEditor({
    editable: false, 
    content: content,
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Image,
      Link,
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-lg md:prose-xl max-w-none prose-orange',
      },
    },
    immediatelyRender: false,
  });

  if (!editor) return null;

  return <EditorContent editor={editor} />;
};

export default BlogRenderer;