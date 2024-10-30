import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContex'

function TopDoctors() {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)
    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Elite Medics On Call</h1>
            <p className='sm:w-1/3 text-center text-sm'>Discover our handpicked selection of trusted medical experts.</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {
                    doctors.slice(0, 12).map((item, index) => (
                        <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border mt-5 border-cyan-900 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                            <img className='bd-blue-50 h-60 bg-cyan-700' src={item.image} alt="" />
                            <div className='p-4'>
                                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500'}`}>
                                    <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500'}  rounded-full`}></p><p>{item.available ? 'Available' : 'Not Available'}</p>
                                </div>
                                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                                <p className='text-gray-600 text-sm'>{item.speciality}</p>
                            </div>
                        </div>

                    ))
                }
            </div>
            <button className='px-12 py-3 rounded-full mt-10 text-cyan-900 border border-cyan-900  hover:bg-cyan-900 hover:text-white ' onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}>more</button>
        </div >
    )
}

export default TopDoctors