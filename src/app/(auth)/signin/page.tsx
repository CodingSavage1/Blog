import React from 'react'
import SigninForm from './signinForm'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <div className='w-[90%] lg:w-[70%] mx-auto'>
        <SigninForm />
      </div>
    </div>
  )
}

export default page