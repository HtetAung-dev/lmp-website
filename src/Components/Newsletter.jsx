import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Newsletter = () => {

    return (
        <div className='w-full pt-10 text-white footerImg' id='contact'>
            {/* max-w-[850px]  */}
            <div className='lg:w-[90%] mx-auto grid lg:grid-cols-4 gap-5 lg:px-5'>
                <div className='lg:col-span-2 px-4 py-4'>
                    <h1 className='md:text-2xl sm:text-xl text-xl font-bold py-2 text-justify'>Want tips & advices to upgrade  your work?</h1>
                    <p className='text-justify'>Leave your mail address here to get the conversation with our business development team.</p>
                </div>
                <div className='lg:col-span-2 p-2'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input type='email' className='p-3 flex w-full rounded-md text-black' placeholder='Enter Your Email' />
                        <button className='bg-[#3de372] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify Me!</button>
                    </div>
                    <p className='text-justify'>
                        We care about the protection of your data. Read our <span className='text-[#3de372]'> Privacy Policy</span>.
                    </p>

                </div>
            </div> 
            {/* Office Address and Location Map */}
            
        </div>
    )
}

export default Newsletter