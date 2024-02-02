import Image from 'next/image'
import Carousel from './components/carousel/carousel'
import Post from './components/post/post'
import Details from './components/details/details'

export default function Home() {
  return (
    <main className="">
        <div className='w-[90%] lg:w-[70%] mx-auto'>
            <div className='py-20'>
                <img src='logo.png' alt='' className='mx-auto'/>
            </div>
            <Carousel />
            <div className='lg:flex items-start justify-between lg:p-10'>
              <Post />
              <Details />
            </div>
        </div>
    </main>
  )
}
