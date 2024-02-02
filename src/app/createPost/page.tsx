import React from 'react'
import PostForm from './postForm'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <div className='w-[90%] lg:w-[70%] mx-auto'>
        <PostForm />
      </div>
    </div>
  )
}

export default page