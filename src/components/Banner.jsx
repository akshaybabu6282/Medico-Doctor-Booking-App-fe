import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Banner() {
    const navigate = useNavigate()
    return (
        <div className='flex bg-cyan-800 px-20 sm:px-10 lg:px-12  mb-20'>
            {/* ---Left side--- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className='text-xl sm:text-2xl md:text-3xl lf:text-5xl font-semibold text-white' >
                    <p style={{fontFamily:"Satisfy"}}>Schedule Your Visit </p>
                    <p className='mt-4' style={{fontFamily:"Satisfy"}}>with Over 100 Verified Medical Experts.</p>
                </div>
                <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className='border border-white text-white text-sm sm:text-base px-8 py-3 rounded-full mt-6 hover:bg-white hover:text-cyan-900 hover:scale-105 transition-all'>Create account</button>
            </div>
            {/* ---Right side--- */}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] w-full h-96 relative'>
                <img className='h-96 absolute bottom-0 right-60 max-w-md pt-20' src={assets.appointment_img} alt="" />
            </div>
        </div>
    )
}

export default Banner