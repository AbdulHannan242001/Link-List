import React from 'react'
import bg1 from '../../assets/Backgrounds/bg1.png'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

const Register = () => {
    const divStyle = {
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${bg1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
    }
    return (
        <div style={divStyle} className='flex-col'>
            <div className='h-32 w-32 mb-10 mt-10'>
                <img src={logo} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-white text-4xl md:text-5xl font-semibold font-inter mb-4 md:mb-8'>Welcome</h1>
                <form action="" className='flex flex-col border-b-[1px] md:border-b-2 border-slate-400 pb-8 md:pb-12'>
                    <input className='w-full md:w-80 px-6 py-3 my-1 md:my-[5px] md:px-8 md:py-4 rounded text-sm md:text-base' type="text" placeholder='Name *' />
                    <input className='w-full md:w-80 px-6 py-3 my-1 md:my-[5px] md:px-8 md:py-4 rounded text-sm md:text-base' type="email" placeholder='Email Address *' />
                    <input className='w-full md:w-80 px-6 py-3 my-1 md:my-[5px] md:px-8 md:py-4 rounded text-sm md:text-base' type="password" placeholder='Password *' />
                    <input className='w-full md:w-80 px-6 py-3 my-1 md:my-[5px] md:px-8 md:py-4 rounded text-sm md:text-base' type="password" placeholder='Confirm Password *' />
                    <div className='flex justify-center items-center mt-4 bg-primaryBlue text-white w-full md:w-80 px-6 py-3 md:px-8 md:py-4 rounded cursor-pointer'>
                        <span className='md:text-xl text-lg font-semibold font-inter'>Register</span>
                    </div>
                </form>
                <p className='pt-4 text-primaryWhite text-sm font-thin'>Already have an account? <Link to='/login' className='text-primaryBlue font-semibold font-inter border-b-2 border-primaryBlue'>Log in</Link></p>
            </div>
        </div>
    )
}

export default Register