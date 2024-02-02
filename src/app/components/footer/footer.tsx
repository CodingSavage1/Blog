import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
<div className='w-[90%] lg:w-[70%] mx-auto'>
    <footer className="footer lg:p-10 ">
            <nav className=''>
                <h6 className="text-[20px] font-robotoSlab text-[#232323] font-bold mb-5">Our Address</h6> 
                <p className="text-[14px] text-[#6D6D6D] mb-5">
					Dannmondi 15 number Sheen Darus Salam. <br/> 112/B Road 8A,
					Dhanmondi.
				</p>
                <div className="space-y-3">
					<p className="text-[14px] text-[#6D6D6D]">+880-036987458765521</p>
					<p className="text-[14px] text-[#6D6D6D]">
						<a href="mailto:information@gmail.com">information@gmail.com</a>
					</p>
				</div>
            </nav> 
            <nav>
                <h6 className="text-[20px] font-robotoSlab text-[#232323] font-bold mb-5">Quick Links</h6> 
                <ul className='space-y-3'>
					<li><a href="#" className="text-[14px] text-[#6D6D6D]">About Us</a></li>
					<li><a href="#" className="text-[14px] text-[#6D6D6D]">Contact Us</a></li>
					<li><a href="#" className="text-[14px] text-[#6D6D6D]">Careers</a></li>
					<li><a href="#" className="text-[14px] text-[#6D6D6D]">Services</a></li>
					<li><a href="#" className="text-[14px] text-[#6D6D6D]">Stories</a></li>
				</ul>
            </nav> 
            <nav>
                <h6 className="text-[20px] font-robotoSlab text-[#232323] font-bold mb-5">Categories</h6> 
                <ul className='space-y-3'>
					<li><a href="#" className="text-[14px] text-[#6D6D6D]">Lifestyle</a></li>
					<li><a href="#" className="text-[14px] text-[#6D6D6D]">Travel</a></li>
					<li><a href="#" className="text-[14px] text-[#6D6D6D]">Food &amp; Drinks</a></li>
					<li><a href="#" className="text-[14px] text-[#6D6D6D]">Inspiration</a></li>
					<li><a href="#" className="text-[14px] text-[#6D6D6D]">Decoration</a></li>
				</ul>
            </nav> 
            <form>
                <h6 className="text-[20px] font-robotoSlab text-[#232323] font-bold mb-5">Our Monthly Newsletter</h6> 
                <fieldset className="form-control w-80">
                <label className="label">
                    <span className="text-[14px] text-[#6D6D6D]">Sign Up TO Get Updates On Articles, Interviews And Events.</span>
                </label> 
                <div className="mt-5 flex justify-between">
                    <input type="text" placeholder="YOUR EMAIL" className="bg-[#F8F8F8] px-5 font-bold text-[14px] outline-none" /> 
                    <button className="bg-[#c5305c] text-white px-5 py-3 font-bold text-[14px]">SIGNUP</button>
                </div>
                </fieldset>
            </form>
    </footer>
</div>
  )
}

export default Footer