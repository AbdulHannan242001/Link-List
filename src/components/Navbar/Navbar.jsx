import React from 'react'
import logo from '../../assets/Logo.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full h-[10vh] z-10 relative bg-slate-900'>
            <div className='w-full h-full flex justify-center items-center'>
                <div className='w-[90%] h-full flex justify-between items-center'>
                    <div onClick={() => navigate('/home')} className='flex justify-center items-center cursor-pointer'>
                        <img src={logo} className='h-[8vh] w-auto' alt="" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='md:h-[8vh] h-[5vh] md:w-[8vh] w-[5vh] rounded-full border-2 border-white overflow-hidden'>
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='h-full w-full object-cover object-center' alt="" />
                        </div>
                        <p className='ml-2 md:text-base text-sm font-semibold text-white'>Adam Levine</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar