import React from 'react'
import { CldUploadWidget } from 'next-cloudinary';
import { BsCloudDownload } from 'react-icons/bs';

type Props = {}

const UploadImage = (props: Props) => {
  return (
    <div>
        <CldUploadWidget uploadPreset="qsymzutf">
            {({ open }) => {
                return (
                <button onClick={() => open()} className='shadow-xl p-5 my-5'>
                    <BsCloudDownload size={40} className='mx-auto mb-5'/>
                    <h5 className='font-robotoSlab font-bold text-sm'>Select Image</h5>
                </button>
                );
            }}
        </CldUploadWidget>
    </div>
  )
}

export default UploadImage