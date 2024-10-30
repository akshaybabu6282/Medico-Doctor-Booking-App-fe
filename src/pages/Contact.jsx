import React from 'react'
import { assets } from '../assets/assets'

function Contact() {
  return (
    <div>
      <div className='text-center text-3xl pt-10'>
        <p>CONTACT <span className='text-cyan-900 font-bold'> US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm ms-20 me-20'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-cyan-800'>OUR OFFICE</p>
          <p className='text-gray-500'>Mananthavady, Wayanad <br />  Kerala, India - 670645</p>
          <p className='text-gray-500'>Phone : 04935 246408 <br /> Email : medico@gmail.com</p> 
          <p className='font-semibold text-lg text-gray-600'>Careers at MEDICO</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border px-8 py-4 text-sm bg-cyan-900 text-white hover:bg-white hover:border-cyan-900 hover:text-cyan-900 transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact