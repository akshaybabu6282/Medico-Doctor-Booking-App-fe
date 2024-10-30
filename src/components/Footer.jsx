import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
    return (
        <div className='bg-cyan-50'>
            <hr className='mt-10  md:mx-32'/>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm md:mx-32'>
                {/* ---Left--- */}
                <div>
                    <div className='flex'>
                        <img className='w-16' src={assets.logo1} alt="" />
                        <h1 className='mt-5 font-bold text-lg text-cyan-800'>Medico</h1>
                    </div>
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Welcome to Medico, your trusted partner in healthcare access. Our platform simplifies the process of booking appointments with qualified doctors across various specialties. With a user-friendly interface and advanced search options, you can easily find the right healthcare professional to meet your needs. At Medico, we prioritize your health and convenience, ensuring that you receive quality care when you need it. Join us in taking the first step towards better health—book your appointment today!</p>
                </div>
                {/* ---Center--- */}
                <div>
                    <p className='text-xl font-medium mb-5 mt-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                {/* ---Right--- */}
                <div>
                    <p className='text-xl font-medium mb-5 mt-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+91 6282444388</li>
                        <li>medico@gmail.com</li>
                    </ul>
                </div>
            </div>
            {/* --- copyright--- */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>copyright 2024@ Medico - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer