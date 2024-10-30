import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <div>
      <div className='text-center text-3xl pt-10 font-bold text-black'>
        <p>ABOUT <span className='text-cyan-800 font-bold'> US</span></p>
      </div>
      <div className='flex my-10 flex-col md:flex-row gap-12 ms-20 me-20'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Medico is a user-friendly platform designed to simplify the process of booking doctor appointments. Whether you're seeking a general check-up, a specialist consultation, or urgent medical care, Medico connects you with trusted healthcare professionals in your area. Our seamless online booking system allows users to browse a wide range of medical services, compare doctors, and schedule appointments in just a few clicks. We believe that healthcare should be accessible and convenient, and we work to bridge the gap between patients and doctors by offering an efficient and transparent service.</p>
          <p>At Medico, we prioritize your health and well-being. Our platform ensures that patients can make informed decisions by providing detailed doctor profiles, including qualifications, experience, and patient reviews. In addition, we offer flexible appointment slots to accommodate even the busiest schedules. With Medico, managing your healthcare needs has never been easier—just select your doctor, pick a time, and get the care you deserve.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Medico is to revolutionize the way people access healthcare by creating a world where booking a doctor's appointment is as simple and stress-free as possible. We aim to empower individuals to take control of their health by providing them with the tools and information they need to make informed choices. By continuously improving our platform, we strive to make healthcare more accessible, efficient, and patient-centered, ensuring that everyone has access to quality care when they need it most.</p>
        </div>
      </div>

      <div className='text-xl my-4 ms-20 mt-16 mb-5'>
        <p>What Makes Us <span className='text-cyan-800 font-semibold'>Unique</span> </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20 ms-20 me-20'>
        <div className='border px-10 md:px-16 py-8 sm-py-16 flex flex-col gap-5 text-[15px] bg-cyan-900 text-white hover:bg-white hover:text-gray-600 transition-all duration-300 cursor-pointer'>
          <b>Efficiency</b>
          <p>Get connected to the right doctor quickly with our streamlined booking process, saving you time and reducing wait periods.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm-py-16 flex flex-col gap-5 text-[15px] bg-cyan-900 text-white hover:bg-white hover:text-gray-600 transition-all duration-300 cursor-pointer'>
          <b>Convenience</b>
          <p>Book appointments anytime, anywhere, with flexible scheduling options tailored to fit your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm-py-16 flex flex-col gap-5 text-[15px] bg-cyan-900 text-white hover:bg-white hover:text-gray-600 transition-all duration-300 cursor-pointer'>
          <b>Personalization</b>
          <p>Enjoy a healthcare experience designed around your needs, with doctor recommendations and services personalized just for you.</p>
        </div>
      </div>
    </div>
  )
}

export default About