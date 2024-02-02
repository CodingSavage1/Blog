import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <div className='w-[90%] lg:w-[70%] mx-auto'>
            <div className='py-20'>
                <img src='logo.png' alt='' className='mx-auto'/>
            </div>

            <div className='text-center lg:mx-52'>
                <h2 className="text-[40px] font-bold font-robotoSlab">About Me</h2>
                <p className='my-10  text-[16px] font-robotoSlab font-light'>Hi, I am Zohan Smith. Sed pellentesque pulvinar arcu ac congue. Sed sed est nec justo
									maximus blandit. Curabitur lacinia, eros sit amet maximus suscipit, magna sapien
									veneuynatis eros, et gravida urna massa ut lectus. Quisque lacinia laciunia viverra.
									Nullram nec est et lorem sodales ornare a in sapien. In trtset urna marximus, conse
									ctetur iligula in, gravida erat. Nullam digniifssrim hendrerit auctor. Sed varius,
									dolor vitae iaculis condim rtweentum, massa nisl cursus sapien, gravida ultrices
									nisi dolor non erat.
                </p>
            </div>
            <img src='about.jpg' alt='' className='mx-auto object-cover'/>

            <div className='flex items-center justify-center gap-7 my-10 font-bold font-robotoSlab'>
                Follow Me: 
                <div className='flex items-center gap-5'>
                    <BsFacebook size={15} color='gray'/>
                    <BsTwitter size={15} color='gray'/>
                    <BsInstagram size={15} color='gray'/>
                    <BsGithub size={15} color='gray'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page