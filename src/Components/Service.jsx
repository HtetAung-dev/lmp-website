import React from "react";
import Website from '../assets/website.jpg';
import Network from '../assets/Network.jpg';
import securePrint from '../assets/securePrint.jpg';

const Service = () => {
    return(
        <div className="w-full bg-[#3de372] py-16 px-4 divide-y divide-dashed hover:divide-solid" id="services">
            <h1 className="md:text-4xl sm:text-3xl text-3xl font-bold text-[#656565] my-4 underline">Our Services</h1>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img src={Website} className="w-[350px] rounded-md drop-shadow-2xl mx-auto my-4" alt="/"/>
                <div className='flex flex-col justify-center'>
                    <p className="text-[#3de372] font-bold">Web Technology</p>
                    <h1 className="md:text-3xl sm:text-2xl text-2xl font-bold py-2">Website Development Service</h1>
                    <p>Our expert team of web developers is dedicated to crafting websites that not only meet but exceed your expectations. Whether you're a startup, a growing business, or an established enterprise, our comprehensive website development services are tailored to suit your unique needs.</p>
                    <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#3de372]">Read more</button>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 md:flex-row-reverse md:flex">
                <img src={Network} className="w-[350px] rounded-md drop-shadow-2xl mx-auto my-4" alt="/"/>
                <div className='flex flex-col justify-center md:mx-32'>
                    <p className="text-[#3de372] font-bold">Web Technology</p>
                    <h1 className="md:text-3xl sm:text-2xl text-2xl font-bold py-2">Network And System Integration</h1>
                    <p>We understand the critical role that robust networking and seamless system integration play in the success of your business. Our comprehensive suite of Networking and System Integration services is designed to elevate your digital infrastructure, enhance efficiency, and ensure secure communication across your organization.</p>
                    <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#3de372]">Read more</button>
                </div>
                
            </div>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img src={securePrint} className="w-[350px] rounded-md drop-shadow-2xl mx-auto my-4" alt="/"/>
                <div className='flex flex-col justify-center'>
                    <p className="text-[#3de372] font-bold">Security Printing</p>
                    <h1 className="md:text-3xl sm:text-2xl text-2xl font-bold py-2">Security Card Printing Services Using Advanced IT Systems</h1>
                    <p>Your trusted partner for state-of-the-art Security Card Printing services. We leverage advanced IT systems to provide secure, customizable, and efficient solutions for organizations seeking enhanced access control and identity management.</p>
                    <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#3de372]">Read more</button>
                </div>
            </div>
        </div>
    )
}

export default Service