import React from "react";

const Social = () => {
    return (
        <div>
            {/* Social links */}
            <div className='mt-5 flex items-center justify-around w-[70%] mx-auto'>
                <p className='lg:text-start mb-2'>Get in touch</p>
                <ul className='flex justify-between lg:w-36'>
                    <li className="w-9 h-9 items-center flex justify-center rounded-full bg-black hover:scale-125 duration-150">
                        <a href="https://www.facebook.com" target="_blank">
                            <i className="text-2xl ri-facebook-circle-fill"></i>
                        </a>
                    </li>
                    <li className="w-9 h-9 items-center flex justify-center rounded-full bg-black hover:scale-125 duration-150">
                        <a href="https://www.instagram.com" target="_blank">
                            <i className="text-2xl ri-instagram-fill"></i>
                        </a>
                    </li>
                    <li className="w-9 h-9 items-center flex justify-center rounded-full bg-black hover:scale-125 duration-150">
                        <a href="https://www.twitter.com" target="_blank">
                            <i className="text-2xl ri-twitter-fill"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Social;