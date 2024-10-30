import React from 'react'
import { assets } from '../assets/assets'

function Header() {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-cyan-800 rounded-lg px-6 md:px-10 lg:px-20 ms-20 me-20 mt-5'  >
            {/* ---Left Side--- */}
            <div className='md:w-1/2 flex flex-col items-center justify-center gap-4 py-10 m-auto md:py-[10vh] md:mb-[-30px]' style={{ paddingTop: "100px", paddingBottom: "150px" }}>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight mb-5 mt-10 ' style={{fontFamily:"Satisfy"}}>Secure a visit with highly  <br />trusted healthcare professionals.</p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p>Easily explore our wide selection of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
                </div>
                <a href="#specality" className='flex items-center gap-2 border border-white text-white px-8 py-3 rounded-full text-sm m-auto md:m-0 hover:bg-white hover:text-cyan-900 hover:scale-105 transition-all duration-300'>
                    Book Your Care <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            {/* ---Right Side--- */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header