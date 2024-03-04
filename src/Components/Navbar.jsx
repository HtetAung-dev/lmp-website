import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, } from 'react-icons/ai'
import LmpLogo from '../assets/lmplogo.png'

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='text-[#2f2f2f] flex justify-between bg-slate-500 font-bold items-center w-full h-24 mx-auto px-4 nav bg-white/100 opacity-80 nav-bar'>
            <img src={LmpLogo} alt="lmp" className='w-[100px]' />
            <ul className='hidden md:flex'>

                <li className='p-4'><a href="#home" className="">Home</a></li>
                <li className='p-4'><a href="#about" className="">About</a></li>
                <li className='p-4'><a href="#services" className="">Services</a></li>
                <li className='p-4'><a href="#product" className="">Product</a></li>
                <li className='p-4'><a href="#contact" className="">Contact</a></li>

            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[55%] h-full border-r border-r-gray-900 bg-[#1a1919] z-30 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <img src={LmpLogo} alt="lmp" className='w-[70px] mx-auto' />
                <ul className='uppercase p-4 bg-[#1a1919] text-slate-100'>
                    <li className='p-4 border-b border-gray-600'><a href="#home" className="">Home</a></li>
                    <li className='p-4 border-b border-gray-600'><a href="#about" className="">About</a></li>
                    <li className='p-4 border-b border-gray-600'><a href="#services" className="">Services</a></li>
                    <li className='p-4 border-b border-gray-600'><a href="#product" className="">Product</a></li>
                    <li className='p-4 border-b border-gray-600'><a href="#contact" className="">Contact</a></li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar