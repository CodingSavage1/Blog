import React from 'react'
import Link from 'next/link'
import { BsChatLeftText, BsHeart } from 'react-icons/bs'

type Props = {}

const Post = (props: Props) => {
  return (
    <div className='w-full lg:w-[65%]'>
    <div className='flex flex-wrap justify-between space-y-10 mt-10 lg:mt-0'>
      <div className='w-full'>
        <div className='relative'>
          <div className='absolute bg-[#212121] top-2 left-2 text-white p-2 font-robotoSlab text-[10px] z-20'>Travel</div>
          <div className='absolute bg-[#212121] bottom-2 right-2 text-white p-2 font-robotoSlab text-[10px] flex items-center gap-7 px-5 z-20'>
            <div className='flex items-center gap-3'>
              <button>
                <BsHeart size={20}/>
              </button>
              <span>50</span>
            </div>

            <div className='flex items-center gap-3'>
              <Link href=''>
                <BsChatLeftText size={20}/>
              </Link>
              <span>16</span>
            </div>
          </div>
          <div className='overflow-hidden'>
            <img src='post1.jpg' alt='image' className='w-full object-cover hover:scale-125 transition duration-500 cursor-pointer z-10'/>
          </div>
        </div>
        <h3 className='text-[20px] lg:text-[32px] font-robotoSlab my-5 '><a href="/1" className='hover:underline font-bold'>Dating While Studying Abroad—Maximize Fun, Minimize Heartbreak</a></h3>
        <div className='flex items-center gap-5 text-[12px] lg:text-[14px] mb-5 text-[#676767]'>
            <div className=''>By: <Link href=''>Zohan Ales</Link></div>
            <div>On: <span>Jan 20 - 23</span></div>
        </div>
        <p className='text-[16px] text-[#8B8B8B] font-light'>When it comes to creating is a website for your business, an attractive design will only get you far. With people increasingly using their tablets and smartphones and website for your business shop online,...</p>
      </div>

      <div className='w-full lg:w-[48%]'>
        <div className='relative'>
          <div className='absolute bg-[#212121] top-2 left-2 text-white p-2 font-robotoSlab text-[10px] z-20'>Fashion</div>
          <div className='absolute bg-[#212121] bottom-2 right-2 text-white p-2 font-robotoSlab text-[10px] flex items-center gap-7 px-5 z-20'>
            <div className='flex items-center gap-3'>
              <button>
                <BsHeart size={20}/>
              </button>
              <span>50</span>
            </div>

            <div className='flex items-center gap-3'>
              <Link href=''>
                <BsChatLeftText size={20}/>
              </Link>
              <span>16</span>
            </div>
          </div>
          <div className='overflow-hidden'>
            <img src='post5.jpg' alt='image' className='w-full object-cover hover:scale-125 transition duration-500 cursor-pointer z-10'/>
          </div>
        </div>
        <h3 className='text-[20px] lg:text-[32px] font-robotoSlab my-5'><a href="/2" className='hover:underline font-bold'>Best WordPress Theme of 2018</a></h3>
        <div className='flex items-center gap-5 text-[12px] lg:text-[14px] mb-5 text-[#676767]'>
            <div className=''>By: <Link href=''>Zohan Ales</Link></div>
            <div>On: <span>Jan 20 - 23</span></div>
        </div>
        <p className='text-[16px] text-[#8B8B8B] font-light'>When it comes to creating is a website for your business, an attractive design will only get you far. With people increasingly using their tablets and smartph</p>
      </div>

      <div className='w-full lg:w-[48%]'>
        <div className='relative'>
          <div className='absolute bg-[#212121] top-2 left-2 text-white p-2 font-robotoSlab text-[10px] z-20'>Tourism</div>
          <div className='absolute bg-[#212121] bottom-2 right-2 text-white p-2 font-robotoSlab text-[10px] flex items-center gap-7 px-5 z-20'>
            <div className='flex items-center gap-3'>
              <button>
                <BsHeart size={20}/>
              </button>
              <span>50</span>
            </div>

            <div className='flex items-center gap-3'>
              <Link href=''>
                <BsChatLeftText size={20}/>
              </Link>
              <span>16</span>
            </div>
          </div>
          <div className='overflow-hidden'>
            <img src='post3.jpg' alt='image' className='w-full object-cover hover:scale-125 transition duration-500 cursor-pointer z-10'/>
          </div>
        </div>
        <h3 className='text-[20px] lg:text-[32px] font-robotoSlab my-5'><a href="/3" className='hover:underline font-bold'>Nature Photography Best Focus</a></h3>
        <div className='flex items-center gap-5 text-[12px] lg:text-[14px] mb-5 text-[#676767]'>
            <div className=''>By: <Link href=''>Zohan Ales</Link></div>
            <div>On: <span>Jan 20 - 23</span></div>
        </div>
        <p className='text-[16px] text-[#8B8B8B] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloremque corporis, dolor harum eligendi quidem nobis tempore delectus eaque debitis.</p>
      </div>

      <div className='w-full lg:w-[48%]'>
        <div className='relative'>
          <div className='absolute bg-[#212121] top-2 left-2 text-white p-2 font-robotoSlab text-[10px] z-20'>Travel</div>
          <div className='absolute bg-[#212121] bottom-2 right-2 text-white p-2 font-robotoSlab text-[10px] flex items-center gap-7 px-5 z-20'>
            <div className='flex items-center gap-3'>
              <button>
                <BsHeart size={20}/>
              </button>
              <span>50</span>
            </div>

            <div className='flex items-center gap-3'>
              <Link href=''>
                <BsChatLeftText size={20}/>
              </Link>
              <span>16</span>
            </div>
          </div>
          <div className='overflow-hidden'>
            <img src='post2.jpg' alt='image' className='w-full object-cover hover:scale-125 transition duration-500 cursor-pointer z-10'/>
          </div>
        </div>
        <h3 className='text-[20px] lg:text-[32px] font-robotoSlab my-5'><a href="/4" className='hover:underline font-bold'>The Olivier da Costa restaurant experience in Lisbon</a></h3>
        <div className='flex items-center gap-5 text-[12px] lg:text-[14px] mb-5 text-[#676767]'>
            <div className=''>By: <Link href=''>Zohan Ales</Link></div>
            <div>On: <span>Jan 20 - 23</span></div>
        </div>
        <p className='text-[16px] text-[#8B8B8B] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloremque corporis, dolor harum eligendi quidem nobis tempore delectus eaque debitis.</p>
      </div>

      <div className='w-full lg:w-[48%]'>
        <div className='relative'>
          <div className='absolute bg-[#212121] top-2 left-2 text-white p-2 font-robotoSlab text-[10px] z-20'>Tourism</div>
          <div className='absolute bg-[#212121] bottom-2 right-2 text-white p-2 font-robotoSlab text-[10px] flex items-center gap-7 px-5 z-20'>
            <div className='flex items-center gap-3'>
              <button>
                <BsHeart size={20}/>
              </button>
              <span>50</span>
            </div>

            <div className='flex items-center gap-3'>
              <Link href=''>
                <BsChatLeftText size={20}/>
              </Link>
              <span>16</span>
            </div>
          </div>
          <div className='overflow-hidden'>
            <img src='post4.jpg' alt='image' className='w-full object-cover hover:scale-125 transition duration-500 cursor-pointer z-10 hover:opacity-100'/>
          </div>
        </div>
        <h3 className='text-[20px] lg:text-[32px] font-robotoSlab my-5'><a href="/5" className='hover:underline font-bold'>The Olivier da Costa restaurant experience in Lisbon</a></h3>
        <div className='flex items-center gap-5 text-[12px] lg:text-[14px] mb-5 text-[#676767]'>
            <div className=''>By: <Link href=''>Zohan Ales</Link></div>
            <div>On: <span>Jan 20 - 23</span></div>
        </div>
        <p className='text-[16px] text-[#8B8B8B] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloremque corporis, dolor harum eligendi quidem nobis tempore delectus eaque debitis.</p>
      </div>
    </div>

    <div className='my-20 flex items-center gap-5'>
      <div className='w-[50px] h-[50px] bg-[#F8F8F8] rounded-full flex lg:text-[16px] items-center justify-center font-bold'>
        <Link href=''>1</Link>
      </div>
      <div className='w-[50px] h-[50px] bg-[#C5305C] text-white lg:text-[16px] rounded-full flex items-center justify-center font-bold'>
        <Link href=''>2</Link>
      </div>
      <div className='w-[50px] h-[50px] bg-[#F8F8F8] rounded-full lg:text-[16px] flex items-center justify-center font-bold'>
        <Link href=''>3</Link>
      </div>
      <div className='w-[50px] h-[50px] bg-[#F8F8F8] rounded-full flex lg:text-[16px] items-center justify-center font-bold'>
        <Link href=''>❯</Link>
      </div>
    </div>
    </div>
  )
}

export default Post