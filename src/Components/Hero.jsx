import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Hero = () => {
    const el = useRef(null)
    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings : ['Innovate', 'Integrate', 'Elevate'],
            startDelay : 300,
            typeSpeed : 120,
            backSpeed : 140,
            backDelay : 100,
            showCursor : true,
            loop : true,
            cursorChar: '|',
            

        });

        return () => {
            typed.destroy();
        };
    }, []);
  return (
    <div className='text-dark'>
        <div className='max-w-[800px] mt-[-46px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#3de372] font-bold p-2'>Transforming Ideas into Intelligent Solutions</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'>Upgrade to Tommorow's Technology, Today.</h1>
            <div className='flex justify-center items-center'>     
                <p className='md:text-5xl sm:text-4xl text-xl font-bold text-[#3de372]' ref={el}></p>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4'> your business with us.</p>
            </div>
            
            <p className='md:text-xl sm:text-sm text-sm font-bold text-gray-200 my-3'>From Smart Software Solutions to Advanced Low Voltage Systems, We Strive to Connect Beyond Limits and Secure Beyond Expectations, Shaping a Sustainable Path to Success!</p>
            <button className='bg-[#000000] w-[200px] rounded-md font-medium mx-auto text-[#3de372] py-3 my-4'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero