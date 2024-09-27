import React from 'react'
import { BorderBeam } from '../magicui/border-beam'

const Callsection = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-evenly w-full   bg-black '>
            {/* Video Section */}
            <div className='pt-10 lg:pt-14 flex justify-center'>
                <video
                    className='h-44 w-full sm:h-60 md:h-72 lg:h-72 lg:w-[500px] rounded-md'
                    poster='./images/poster.jpg'
                    controls
                    src="./public/intro.mp4">
                </video>
            </div>

            {/* Information Section */}
            <div className='h-auto lg:h-[430px] w-full lg:w-[550px] pt-6 lg:pt-3 rounded-lg relative text-white mt-4 bg-[#CF5C36] md:m-3'>
                <BorderBeam />
                <div className='justify-center flex'>
                    <img className='h-[35px] lg:h-[45px]' src="./images/live.png" alt="live image" />
                </div>
                <div className='flex justify-center'>
                    <div className='text-center'>
                        <h1 className='font-bold text-lg lg:text-2xl w-full lg:w-[400px] pt-2'>
                            What to expect in 30 Mins Call
                        </h1>
                        <div className='h-[3px] w-full lg:w-[360px] mt-3 ml-auto mr-auto bg-green-400'></div>
                    </div>
                </div>

                {/* Bullet Points Section */}
                <div className='pt-4'>
                    {[
                        'Your Current Situation Analysis and Roadmap to reach your Goal',
                        'How you can be 1 of the top 5 Coaches in your Industry',
                        'How to increase individual Online Presence and Generate Quality Leads'
                    ].map((text, idx) => (
                        <div key={idx} className='flex pl-2 pt-3 gap-[8px]'>
                            <div>
                                <img className='h-[22px] mt-3 md:mt-0 md:h-[30px] w-auto' src="./images/checkmark.png" alt="check mark" />
                            </div>
                            <div>
                                <h1 className='pt-[2px] text-start font-medium'>{text}</h1>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Button */}
                <div className="h-[60px] w-auto mt-6 flex justify-center items-center">
                    <div className="relative inline-flex group">
                        <div
                            className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                        </div>
                        <a
                            href="https://calendly.com/infohub-gx2h/30min"
                            target='blank'
                            title="Get quote now"
                            className="relative inline-flex items-center justify-center px-4 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button">
                            BOOK STRATEGY CALL
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Callsection;
