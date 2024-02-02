import React from 'react'

type Props = {}

const SigninForm = (props: Props) => {
  return (
    <div className='space-y-5 my-20'>
        <h2 className='text-[32px] font-bold'>Signin To Blog</h2>
        <div>
          <label htmlFor="username" className='font-bold font-robotoSlab'>Username</label>
          <input type="text" placeholder="Username" className="input input-bordered w-full my-5" />
        </div>
        <div>
          <label htmlFor="password" className='font-bold font-robotoSlab mb-5'>Password</label>
          <input type="password" placeholder="Type here" className="input input-bordered w-full my-5" />
        </div>

        <div className='font-bold font-robotoSlab text-[14px] text-right'>
          <a href="" className='hover:text-[#c5305c]'>Forgot Password</a>
        </div>

        <button className="bg-[#c5305c] text-white px-5 py-3 font-bold text-[14px]">SIGN IN</button>
        <div className='font-bold font-robotoSlab text-[14px] text-center flex items-center justify-center gap-3 pt-10'>
          <p>New To Our Blog? </p>
          <a href="/signup" className='text-[#c5305c]'>Sign Up</a>
        </div>
    </div>
  )
}

export default SigninForm