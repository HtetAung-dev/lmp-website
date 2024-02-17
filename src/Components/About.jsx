import React from "react";
import Bendy from "../assets/Bendy.jpg";


const About = () => {

    return (
        <div className="w-full p-10 aboutImg" id="about">
            <div className="absolute inset-0 bg-no-repeat bg-cover" style={{ backgroundImage: "./assets/aboutImg.jpg" }}></div>
            <h1 className="md:text-4xl sm:text-3xl text-3xl font-bold text-[#26f461] my-4 underline">About Us</h1>
            <div className="max-w-[1240px] mx-auto text-center m-5">
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ducimus minima est nam nesciunt animi amet ut a ipsam cumque, possimus nulla enim, voluptas earum eaque sed fuga corrupti magnam!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                <div className="flex flex-col items-center ">
                    <img
                        src={Bendy}
                        alt="Team member 1"
                        className="w-32 h-32 rounded-full object-cover mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">John Doe</h3>
                    <p className="text-green-500 text-sm font-semibold leading-6">Founder & CEO</p>
                </div>
                <div className="flex flex-col items-center ">
                    <img
                        src={Bendy}
                        alt="Team member 1"
                        className="w-32 h-32 rounded-full object-cover mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">John Doe</h3>
                    <p className="text-green-500 text-sm font-semibold leading-6">Founder & CEO</p>
                </div>
                <div className="flex flex-col items-center ">
                    <img
                        src={Bendy}
                        alt="Team member 1"
                        className="w-32 h-32 rounded-full object-cover mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">John Doe</h3>
                    <p className="text-green-500 text-sm font-semibold leading-6">Founder & CEO</p>
                </div>
                <div className="flex flex-col items-center ">
                    <img
                        src={Bendy}
                        alt="Team member 1"
                        className="w-32 h-32 rounded-full object-cover mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">John Doe</h3>
                    <p className="text-green-500 text-sm font-semibold leading-6">Founder & CEO</p>
                </div>
            </div>
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md">
                Learn More
            </a>
        </div>
    )
}

export default About