'use client'
import React from 'react'
import {useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import UploadImage from './uploadImage'

type Props = {}

const PostForm = (props: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    editorProps: {
      attributes: {
          class: "border border-gray-400 p-4 min-h-[20rem] max-h-[20rem] overflow-y-auto rounded-lg"
      }
  },
    content: '<p>Hello World! 🌎️</p>',
  })
  return (
    <div className='space-y-10 my-20'>
      <h2 className='text-[32px] font-bold'>Create Blog Post</h2>
      <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <div>
          <label htmlFor="username" className='font-bold font-robotoSlab'>Post Category</label>
          <select className="select select-bordered w-full my-5">
            <option disabled selected>Who shot first?</option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>

        <div>
          <label htmlFor="username" className='font-bold font-robotoSlab'>Post Title</label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full my-5" />
        </div>

      </div>

      <div>
        <label htmlFor="username" className='font-bold font-robotoSlab'>Post Description</label>
        <EditorContent editor={editor} className='my-5'/>
      </div>

      <div>
        <label htmlFor="username" className='font-bold font-robotoSlab'>Post Image</label>
        <UploadImage />
      </div>

      <button className="bg-[#c5305c] text-white px-5 py-3 font-bold text-[14px]">POST</button>
    </div>
  )
}

export default PostForm