'use client'
import Link from 'next/link'
import React, {useState} from 'react'
import { BsFacebook, BsInstagram, BsPinterest, BsSearch, BsTwitter, BsTextRight } from 'react-icons/bs'
import { usePathname } from 'next/navigation'

type Props = {}

const NavLinks = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Blogs',
        href: ''
    },
    {
        title: 'About Me',
        href: '/about'
    },
    {
        title: 'Contact',
        href: ''
    },
    {
        title: 'Sign in',
        href: '/signin'
    },
    {
        title: 'Create Post',
        href: '/createPost'
    },
]

const SocialLinks = [
    {
        icon: <BsFacebook size={18}/>,
        href: ''
    },
    {
        icon: <BsTwitter size={18}/>,
        href: ''
    },
    {
        icon: <BsInstagram size={18}/>,
        href: ''
    },
    {
        icon: <BsPinterest size={18}/>,
        href: ''
    },
]

const Header = (props: Props) => {
    const currentPath = usePathname();
    const [searchOpen, setSearchOpen] = useState(false)
    const [navOpen, setNavOpen] = useState(false)

    const OpenSearch = () => {
        {searchOpen === false ? setSearchOpen(true) : setSearchOpen(false)}
    }

    const OpenNav = () => {
        {navOpen === false ? setNavOpen(true) : setNavOpen(false)}
    }
  return (
    <div className='bg-[#212121] h-fit'>
        <div className='flex items-center justify-between w-[90%] lg:w-[70%] mx-auto py-7 lg:py-10 relative'>
            <ul className='flex  items-center gap-7'>
                {SocialLinks.map((icons, index) => (
                    <li key={index}><Link href={icons.href} className={`text-[#7D7D7D] hover:text-[#C5305C]`}>{icons.icon}</Link></li>
                ))}
            </ul>
            <ul className='hidden lg:flex  items-center gap-10 '>
                {NavLinks.map((link, index) => (
                    <li key={index}><Link href={link.href} className={`${link.href === currentPath ? 'text-[#C5305C] underline' : 'text-[#FFFFFF]'}  font-robotoSlab text-[15px] font-semibold hover:text-[#C5305C]`}>{link.title}</Link></li>
                ))}
            </ul>
            <div className='flex space-x-5'>
                <button onClick={OpenSearch} className='text-[#7D7D7D]'>
                    <BsSearch size={18}/>
                </button>
                <button className='lg:hidden' onClick={OpenNav}>
                    <BsTextRight size={25}/>
                </button>
            </div>

            <ul className={`lg:hidden absolute w-full bg-[#212121] top-24 lg:top-28 z-30  ${navOpen === false ? 'h-0' : 'h-fit'} overflow-hidden`}>
                {NavLinks.map((link, index) => (
                    <li key={index} className='even:border-y-2 border-gray-700 p-4'><Link href={link.href} className='text-[#FFFFFF]  font-robotoSlab text-[15px]'>{link.title}</Link></li>
                ))}
            </ul>

            <div className={`bg-white w-[100%] lg:w-[30%] flex justify-between absolute right-0 top-24 lg:top-28 z-30 ${searchOpen === false ? 'h-0' : 'h-fit p-2'} overflow-hidden shadow-xl`}>
            <input type='text' placeholder='Search' className='border-2 bg-transparent w-full px-5 outline-none'/>
            <button className='bg-[#C5305C] px-7 py-5'>
                <BsSearch size={18} color='white'/>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Header