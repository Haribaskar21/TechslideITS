import { useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import { Extension } from '@tiptap/core';
import EmojiPicker from 'emoji-picker-react';

import {
  FaBold, FaItalic, FaUnderline, FaListUl, FaListOl,
  FaQuoteRight, FaCode, FaImage, FaUndo, FaRedo,
  FaLink, FaSmile
} from 'react-icons/fa';

// ✅ FontFamily Extension
const FontFamily = Extension.create({
  name: 'fontFamily',
  addOptions() {
    return {
      types: ['textStyle'],
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontFamily: {
            default: null,
            parseHTML: element => element.style.fontFamily?.replace(/['"]/g, ''),
            renderHTML: attributes =>
              attributes.fontFamily
                ? { style: `font-family: ${attributes.fontFamily}` }
                : {},
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setFontFamily: fontFamily => ({ chain }) =>
        chain().setMark('textStyle', { fontFamily }).run(),
    };
  },
});

export default function ContentEditor({ value, onChange }) {
  const [showEmoji, setShowEmoji] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        bulletList: { keepMarks: true },
        orderedList: { keepMarks: true },
        codeBlock: true,
        blockquote: true,
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          target: '_blank',
          rel: 'noopener noreferrer',
          class: 'text-blue-600 underline hover:text-blue-800',
        },
      }),
      Image,
      TextStyle,
      FontFamily,
      Color,
      Highlight,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right', 'justify'],
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  useEffect(() => {
    if (editor && value) {
      editor.commands.setContent(value);
    }
  }, [editor, value]);

  if (!editor) return null;

  const addImage = () => {
    const url = window.prompt('Enter Image URL');
    if (url) editor.chain().focus().setImage({ src: url }).run();
  };

  const addLink = () => {
    const url = window.prompt('Enter link URL');
    if (url) {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      editor.chain().focus().setImage({ src: reader.result }).run();
    };
    reader.readAsDataURL(file);
  };

  const getBtnClass = (active) =>
    `p-1 rounded ${active ? 'bg-blue-100 text-blue-700' : 'hover:text-blue-600'}`;

  return (
    <div className="mb-6 relative">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 border border-gray-300 bg-white p-2 rounded-t-md shadow-sm">
        {/* Basic formatting */}
        <button type="button" className={getBtnClass(editor.isActive('bold'))} onClick={() => editor.chain().focus().toggleBold().run()}><FaBold /></button>
        <button type="button" className={getBtnClass(editor.isActive('italic'))} onClick={() => editor.chain().focus().toggleItalic().run()}><FaItalic /></button>
        <button type="button" className={getBtnClass(editor.isActive('underline'))} onClick={() => editor.chain().focus().toggleUnderline().run()}><FaUnderline /></button>

        {/* Font size */}
        <select onChange={(e) => editor.chain().focus().setMark('textStyle', { fontSize: e.target.value }).run()} className="text-sm border p-1 rounded" defaultValue="16px">
          <option value="12px">12</option>
          <option value="14px">14</option>
          <option value="16px">16</option>
          <option value="18px">18</option>
          <option value="20px">20</option>
        </select>

        {/* Font family */}
        <select className="text-sm border p-1 rounded" onChange={(e) => editor.chain().focus().setFontFamily(e.target.value).run()}>
          <option value="">Font</option>
          <option value="Arial">Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="Verdana">Verdana</option>
          <option value="Courier New">Courier New</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>

        {/* Color & highlight */}
        <input type="color" className="w-8 h-8 p-0 border rounded" onInput={(e) => editor.chain().focus().setColor(e.target.value).run()} />
        <button type="button" className={getBtnClass(editor.isActive('highlight'))} onClick={() => editor.chain().focus().toggleHighlight().run()}>
          <span className="underline text-yellow-500">A</span>
        </button>

        {/* Alignment */}
        <button type="button" onClick={() => editor.chain().focus().setTextAlign('left').run()}>🡸</button>
        <button type="button" onClick={() => editor.chain().focus().setTextAlign('center').run()}>⇔</button>
        <button type="button" onClick={() => editor.chain().focus().setTextAlign('right').run()}>🡺</button>
        <button type="button" onClick={() => editor.chain().focus().setTextAlign('justify').run()}>☰</button>

        {/* Lists */}
        <button type="button" className={getBtnClass(editor.isActive('bulletList'))} onClick={() => editor.chain().focus().toggleBulletList().run()}><FaListUl /></button>
        <button type="button" className={getBtnClass(editor.isActive('orderedList'))} onClick={() => editor.chain().focus().toggleOrderedList().run()}><FaListOl /></button>

        {/* Headings */}
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>H1</button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</button>

        {/* Blockquote / Code */}
        <button type="button" className={getBtnClass(editor.isActive('blockquote'))} onClick={() => editor.chain().focus().toggleBlockquote().run()}><FaQuoteRight /></button>
        <button type="button" className={getBtnClass(editor.isActive('codeBlock'))} onClick={() => editor.chain().focus().toggleCodeBlock().run()}><FaCode /></button>

        {/* Link & Image */}
        <button type="button" onClick={addLink}><FaLink /></button>
        <button type="button" onClick={addImage}><FaImage /></button>
        <label className="cursor-pointer hover:text-blue-600">
          📁<input type="file" accept="image/*" className="hidden" onChange={uploadImage} />
        </label>

        {/* Undo/Redo */}
        <button type="button" onClick={() => editor.chain().focus().undo().run()}><FaUndo /></button>
        <button type="button" onClick={() => editor.chain().focus().redo().run()}><FaRedo /></button>

        {/* Emoji */}
        <button type="button" onClick={() => setShowEmoji(!showEmoji)}><FaSmile /></button>
      </div>

      {/* Emoji Picker */}
      {showEmoji && (
        <div className="absolute z-50 top-14 left-4 shadow-xl">
          <EmojiPicker
            onEmojiClick={(emojiObject) => {
              editor.chain().focus().insertContent(emojiObject.emoji).run();
              setShowEmoji(false);
            }}
            theme="light"
          />
        </div>
      )}

      {/* Editor Output */}
      <EditorContent
        editor={editor}
        className="min-h-[250px] p-4 border border-t-0 rounded-b-md bg-white text-sm focus:outline-none
        [&_h1]:text-3xl [&_h2]:text-2xl [&_h3]:text-xl
        [&_ul]:list-disc [&_ul]:ml-6
        [&_ol]:list-decimal [&_ol]:ml-6
        [&_li]:mb-1
        [&_a]:text-blue-600 [&_a:hover]:underline
        [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600
        [&_img]:rounded-md [&_img]:max-w-full [&_img]:my-4
        [&_p]:mb-3 [&_code]:bg-gray-100 [&_code]:px-1 [&_code]:rounded
        [&_[style*='text-align:center']]:text-center
        [&_[style*='text-align:right']]:text-right
        [&_[style*='text-align:justify']]:text-justify"
      />
    </div>
  );
}
