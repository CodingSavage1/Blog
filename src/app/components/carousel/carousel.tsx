import Link from 'next/link'
import React from 'react'

type Props = {}

const Carousel = (props: Props) => {
  return (
    <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-[250px] lg:h-[600px]">
            <img src="blog1.jpg" className="w-full object-cover" />
            <div className="absolute flex items-center justify-between w-full top-0 left-0 h-full bg-[#00000099]">
                <a href="#slide3" className="btn px-5 py-2 rounded-none">❮</a> 
                <div className='text-white w-[80%] lg:w-[50%]'>
                    <div className='flex items-center justify-center gap-5 text-[12px] lg:text-[14px]'>
                        <div className=''>By: <Link href=''>Zohan Ales</Link></div>
                        <div>On: <span>Jan 20 - 23</span></div>
                    </div>

                    <h3 className='text-[20px] lg:text-[52px] font-robotoSlab font-bold text-center my-5'><a href="single-post.html" className='hover:underline'>The Olivier da Costa restaurant experience in Lisbon</a></h3>
                    <div className='w-fit mx-auto mt-10'>
                            <Link href='' className='border-2 text-xs lg:text-sm px-5 lg:px-10 py-2 lg:py-5'>Read More</Link>
                    </div>
                </div>
                <a href="#slide2" className="btn px-5 py-2 rounded-none">❯</a>
            </div>
        </div> 

        <div id="slide2" className="carousel-item relative w-full  h-[250px] lg:h-[600px]">
            <img src="blog2.jpg" className="w-full object-cover" />
            <div className="absolute flex items-center justify-between w-full top-0 left-0 h-full bg-[#00000099] ">
                <a href="#slide1" className="btn  px-5 py-2 rounded-none">❮</a> 
                <div className='text-white w-[80%] lg:w-[50%]'>
                    <div className='flex items-center justify-center gap-5 text-[12px] lg:text-[14px]'>
                        <div className=''>By: <Link href=''>Zohan Ales</Link></div>
                        <div>On: <span>Jan 20 - 23</span></div>
                    </div>

                    <h3 className='text-[20px] lg:text-[52px] font-robotoSlab font-bold text-center my-5'><a href="single-post.html" className='hover:underline'>The Olivier da Costa restaurant experience in Lisbon</a></h3>
                    <div className='w-fit mx-auto mt-10'>
                            <Link href='' className='border-2 text-xs lg:text-sm px-5 lg:px-10 py-2 lg:py-5'>Read More</Link>
                    </div>
                </div>
                <a href="#slide3" className="btn px-5 py-2 rounded-none">❯</a>
            </div>
        </div> 

        <div id="slide3" className="carousel-item relative w-full h-[250px] lg:h-[600px]">
            <img src="blog3.jpg" className="w-full object-cover" />
            <div className="absolute flex items-center justify-between w-full top-0 left-0 h-full bg-[#00000099]">
                <a href="#slide2" className="btn px-5 py-2 rounded-none">❮</a> 
                <div className='text-white w-[80%] lg:w-[50%]'>
                    <div className='flex items-center justify-center gap-5 text-[12px] lg:text-[14px]'>
                        <div className=''>By: <Link href=''>Zohan Ales</Link></div>
                        <div>On: <span>Jan 20 - 23</span></div>
                    </div>

                    <h3 className='text-[20px] lg:text-[52px] font-robotoSlab font-bold text-center my-5'><a href="single-post.html" className='hover:underline'>The Olivier da Costa restaurant experience in Lisbon</a></h3>
                    <div className='w-fit mx-auto mt-10'>
                            <Link href='' className='border-2 text-xs lg:text-sm px-5 lg:px-10 py-2 lg:py-5'>Read More</Link>
                    </div>
                </div>
                <a href="#slide1" className="btn px-5 py-2 rounded-none">❯</a>
            </div>
        </div> 
</div>
  )
}

export default Carousel