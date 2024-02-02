import React from 'react'
import SignupForm from './signupForm'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <div className='w-[90%] lg:w-[70%] mx-auto'>
        <SignupForm />
      </div>
    </div>
  )
}

export default page