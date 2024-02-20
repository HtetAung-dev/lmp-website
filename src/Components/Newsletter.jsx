import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import Social from './Social'

const Newsletter = () => {

    return (
        <div className='w-full pt-10 text-white footerImg' id='contact'>
            {/* max-w-[850px]  */}
            {/* <div className='lg:w-[90%] mx-auto grid lg:grid-cols-4 gap-5 lg:px-5'>
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

                    <div>
                        <Social />
                    </div>
                </div>
            </div> */}
            <div className="mb-10">
                <div className="mb-5">
                    <div className="">
                        <h3 className="text-3xl pb-2">GET IN TOUCH</h3>
                        <p className="text-lg">Leave your mail address here to get the conversation with our business development team.</p>
                    </div>
                </div>
                <div className="w-[90%] mx-auto md:grid md:grid-cols-2 items-center">
                    <div className="text-left">
                        <h3 className="text-2xl mb-3 border-b-4 pb-2 w-[70%]">Contact Info</h3>
                        <ul className=''>
                            <li className='my-2'>
                                <a href="tel:0943019820" className="">0943019820</a>
                            </li>
                            <li className='my-2'>
                                <div className="">LuuMinPhyo@gmail.com</div>
                            </li>
                            <li className='my-2'>
                                <div className="">28th, 70*71th. ChanAyeTharZan, Mandalay.</div>
                            </li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h3 className="text-2xl mb-3 border-b-4 pb-2 w-[70%]">Contact Form</h3>
                        <div className="lg:grid lg:grid-cols-2">
                        <div className="my-2">
                            <input type="text" className='rounded-md p-1 bg-gray-200 outline-none text-black' placeholder='Name' />
                        </div>
                        <div className="my-2">
                            <input type="number" className='rounded-md p-1 bg-gray-200 outline-none text-black' placeholder='Phone' />
                        </div>
                        <div className="my-2">
                            <input type="text" className='rounded-md p-1 bg-gray-200 outline-none text-black' placeholder='Message' />
                        </div>
                        <button className='bg-[#3de372] text-black rounded-md w-32'>Notify Me!</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Office Address and Location Map */}
            <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14799.394382709184!2d96.0995296!3d21.9787732!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cb6d7dc9b78491%3A0xba3a17da5fea8bf6!2sLuu%20Min%20Phyo%20Company%20Limited!5e0!3m2!1sen!2smm!4v1708446582004!5m2!1sen!2smm" width="600" height="450" allowFullScreen referrerPolicy='no-referrer-when-downgrade' loading="lazy" title='responsive google map'></iframe>
            </div>
            <div className="text-sm text-center text-green-400 my-2 font-semibold">
                &copy; {new Date().getFullYear()} LMP Corporation. All rights reserved.
            </div>
        </div>
    )
}

export default Newsletter