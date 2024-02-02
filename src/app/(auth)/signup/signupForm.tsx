'use client'
import React from 'react'
import {useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import UploadImage from './uploadImage'

type Props = {}

const SignupForm = (props: Props) => {
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
    <div className='space-y-5 my-20'>
      <h2 className='text-[32px] font-bold'>Signup To Blog</h2>
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <div>
            <label htmlFor="Fullname" className='font-bold font-robotoSlab'>Full Name</label>
            <input type="text" placeholder="Full Name" className="input input-bordered w-full my-5" />
          </div>
          <div>
            <label htmlFor="email" className='font-bold font-robotoSlab mb-5'>Email</label>
            <input type="email" placeholder="Email" className="input input-bordered w-full my-5" />
          </div>
        </div>

        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <div>
            <label htmlFor="Contact" className='font-bold font-robotoSlab'>Contact</label>
            <input type="text" placeholder="Contact" className="input input-bordered w-full my-5" />
          </div>
          <div>
            <label htmlFor="email" className='font-bold font-robotoSlab mb-5'>Username</label>
            <input type="text" placeholder="Username" className="input input-bordered w-full my-5" />
          </div>
        </div>

        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <div>
            <label htmlFor="Contact" className='font-bold font-robotoSlab'>Blog Name</label>
            <input type="text" placeholder="Contact" className="input input-bordered w-full my-5" />
          </div>
          <div>
            <label htmlFor="email" className='font-bold font-robotoSlab mb-5'>Blog Category</label>
            <select className="select select-bordered w-full my-5">
              <option disabled selected>Who shot first?</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="username" className='font-bold font-robotoSlab'>Blog Description</label>
          <EditorContent editor={editor} className='my-5'/>
        </div>

        <div>
          <label htmlFor="username" className='font-bold font-robotoSlab'>Blog Image</label>
          <UploadImage />
        </div>

        <button className="bg-[#c5305c] text-white px-5 py-3 font-bold text-[14px]">SIGN UP</button>
        <div className='font-bold font-robotoSlab text-[14px] text-center flex items-center justify-center gap-3 pt-10'>
          <p>Already Have A Blog? </p>
          <a href="/signin" className='text-[#c5305c]'>Sign In</a>
        </div>
    </div>
  )
}

export default SignupForm