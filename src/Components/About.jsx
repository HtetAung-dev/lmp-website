import React from "react";
import Bendy from "../assets/Bendy.jpg";


const About = () => {

    return (
        <div className="w-full sm:py-20 md:py-10 lg:py-10 aboutImg" id="about">
            <div className="absolute inset-0 bg-no-repeat bg-cover" ></div>
            <div className="flex flex-col md:flex-row px-10 md:px-2">
                <div className="lg:w-[50%] sm:w-[100%] rounded overflow-hidden shadow-lg bg-slate-100 md:mx-1 sm:my-1 my-1  hover:text-slate-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
                    <div className="px-6 py-4">
                        <div className="font-bold md:text-2xl sm:text-xl text-xl mb-2">Mission</div>
                        <div className="">
                            <ul className="p-5 list-outside list-disc text-justify md:text-base sm:text-sm text-sm">
                                <li className="my-2">Our objective is to leverage our project management and engineering competences to achieve growth by offering our customers new and innovative solutions.</li>
                                <li className="my-2">Our digital transformation will provide increased customer value and optimised performance.</li>
                                <li className="my-2">Our growth ambitions are supported by our superior global service network.</li>
                                <li className="my-2">Our effort is delivery of highly professional, efficient and flexible service and achievement of "win_win" situations with our customers and business partners.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[50%] sm:w-[100%] rounded overflow-hidden shadow-lg bg-slate-100 md:mx-1 sm:my-1 my-1  hover:text-slate-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
                    <div className="px-6 py-4">
                        <div className="font-bold md:text-2xl sm:text-xl text-xl mb-2">Vision</div>
                        <div className="">
                            <ul className="p-5 list-outside list-disc text-justify  md:text-base sm:text-sm text-sm">
                                <li className="my-2">Luu Min Phyo Co.,Ltd is committed to enhancing the trustworthy value by strengthening our market position, providing the quality service by expanding our operations and developing strategic core businesses.</li>
                                <li className="my-2">Increasing security awareness and changing business needs are affecting the way that our strategic core businesses operate.</li>
                                <li className="my-2">With our integrated offering of services and products, we are well positioned today to respond to the need for innovative and flexible solutions.</li>
                                <li className="my-2">Not only for the goal we achieve but now we deliver the world-class diversity service package with Trust and Integrity to customers.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About