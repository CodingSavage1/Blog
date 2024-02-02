import Link from 'next/link'
import React from 'react'
import { BiLogoFacebookSquare, BiLogoLinkedin, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi'

type Props = {}

const Details = (props: Props) => {
  return (
    <div className='bg-[#FAFAFA] lg:w-[28.50%] p-5 space-y-10'>
      <div>
        <div>
          <h4 className="bg-[#292929] text-[18px] font-robotoSlab font-bold text-white p-3">About Me</h4>
        </div>

        <div className='text-center space-y-5'>
          <img src='about-me2.jpg' alt='' className='w-[100px] h-[100px] mx-auto mt-5 object-cover'/>
          <h3 className='text-[20px] font-robotoSlab font-bold'>Writer & Photographer</h3>
          <p className='text-[16px] font-robotoSlab text-[#494949]'>When it comes to creating is a website for your business, an attractive design</p>
          <img src='signature.png' alt='' className='w-[50px] mx-auto object-cover'/>
        </div>
      </div>

      <div>
        <div>
          <h4 className="bg-[#292929] text-[18px] font-robotoSlab font-bold text-white p-3">Categories</h4>
        </div>
        <ul className='w-full mt-5 font-robotoSlab text-[16px] font-bold'>
										<li className='border-b-[1px] py-3'>
											<a href="#" className='flex justify-between items-center hover:text-[#C5305C]'>Foods <span className="count">24</span></a>
										</li>
										<li className='border-b-[1px] py-3'>
											<a href="#" className='flex justify-between items-center hover:text-[#C5305C]'>Reciepes <span className="count">22</span></a>
										</li>
										<li className='border-b-[1px] py-3'>
											<a href="#" className='flex justify-between items-center hover:text-[#C5305C]'>Diet <span className="count">60</span></a>
										</li>
										<li className='border-b-[1px] py-3'>
											<a href="#" className='flex justify-between items-center hover:text-[#C5305C]'>Health Foods <span className="count">34</span></a>
										</li>
										<li className='border-b-[1px] py-3'>
											<a href="#" className='flex justify-between items-center hover:text-[#C5305C]'>Fast Foods <span className="count">17</span></a>
										</li>
					</ul>
      </div>

      <div>
        <div>
          <h4 className="bg-[#292929] text-[18px] font-robotoSlab font-bold text-white p-3">Social</h4>
        </div>
        <div className='grid grid-cols-2 mx-auto gap-y-10 mt-5'>
          <div className=' '>
            <BiLogoFacebookSquare size={30} color='blue' className='mx-auto'/>
            <div className='mx-auto w-fit text-[#2D2D2D] font-robotoSlab text-[14px]'><span className=''>FaceBook</span></div>
          </div>
          <div className=''>
            <BiLogoTwitter size={30} color='skyblue' className='mx-auto'/>
             <div className='mx-auto w-fit text-[#2D2D2D] font-robotoSlab text-[14px]'><span>Twitter</span>
          </div>
          </div>
          <div className=''>
            <BiLogoLinkedin size={30} color='blue' className='mx-auto'/>
             <div className='mx-auto w-fit text-[#2D2D2D] font-robotoSlab text-[14px]'><span>LinkedIn</span></div>

          </div>
          <div className=''>
            <BiLogoYoutube size={30} color='red' className='mx-auto'/>
             <div className='mx-auto w-fit text-[#2D2D2D] font-robotoSlab text-[14px]'><span>Youtube</span>
          </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h4 className="bg-[#292929] text-[18px] font-robotoSlab font-bold text-white p-3">Recent Post</h4>
        </div>

        <div className='space-y-5 mt-5'>
            <div className='flex gap-5'>
              <img src='wp_1.jpg' alt='' />
              <div>
                <h3 className="font-bold font-robotoSlab text-[16px]">
                  <a href="single-post.html" className='hover:underline'>Best Wordpress Theme of 2018</a>
                </h3>
                <div className="text-[14px]">
                    August 23, 2015
                </div>
              </div>
            </div>

            <div className='flex gap-5'>
              <img src='wp_2.jpg' alt='' />
              <div>
                <h3 className="font-bold font-robotoSlab text-[16px]">
                  <a href="single-post.html" className='hover:underline'>Dating While Studying Minimize Heartbreak</a>
                </h3>
                <div className="text-[14px]">
                    August 23, 2015
                </div>
              </div>
            </div>

            <div className='flex gap-5'>
              <img src='wp_3.jpg' alt='' />
              <div>
                <h3 className="font-bold font-robotoSlab text-[16px]">
                  <a href="single-post.html" className='hover:underline'>Nature Photography Best Place Focus</a>
                </h3>
                <div className="text-[14px]">
                    August 23, 2015
                </div>
              </div>
            </div>

        </div>

      </div>
    </div>
  )
}

export default Details