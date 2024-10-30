import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

function SpecialityMenu() {
    return (
        <div className='flex flex-col items-center gap-4 text-gray-800 mt-10 mb-10' id='specality'>
            <h1 className='text-3xl font-medium'>Discover by Specialty.</h1>
            <p className='sm:w-1/3 text-center text-sm'>
                Effortlessly peruse our vast directory of trusted doctors and book your appointment without any stress.</p>
            <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-x-scroll'>
                {specialityData.map((item, index) => (
                    <Link onClick={() => scrollTo(0, 0)} key={index} to={`/doctors/${item.speciality}`} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
                        <img className='w-16 sm:w-24 mb-2 bg-cyan-900 rounded-full p-3' src={item.image} alt="" />
                        <p className='font-bold'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu