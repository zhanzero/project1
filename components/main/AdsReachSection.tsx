'use client'

import React from 'react'
import { ChevronRight } from 'lucide-react'

const AdsReachSection = () => {
    return (
        <section className="bg-white md:px-0 px-6">
            <div className="max-w-[1240px] mx-auto md:flex items-center justify-between gap-10">
                {/* Left Content */}
                <div className="md:w-1/2 w-full">
                    <h2 className="md:text-[36px] text-[32px] font-[500] text-[#1C2B33] leading-tight mb-6">
                        Reach more customers with ads on Meta technologies.
                    </h2>
                    <p className="text-[18px] text-[#5D6C7B] mb-10 max-w-[500px]">
                        Discover everything you need to start advertising your business.
                    </p>

                    <div className="flex items-center gap-8">
                        <div className="bg-[#0457CB] text-white px-8 py-3 rounded-full font-[500] text-[15px] cursor-pointer hover:bg-blue-700 transition-colors">
                            Learn more
                        </div>

                        <div className="flex items-center gap-3 text-[#0457CB] font-[500] cursor-pointer group">
                            <div className='mt-1 flex items-center gap-2 cursor-pointer w-[fit-content] group'>
                                <div className=' w-[32px] h-[32px] rounded-full border border-[#0A131773] flex items-center justify-center group-hover:border-[#007BFF] transition-all duration-300'>
                                    <img src="/images/icons/ic_arrow_left.svg" className='w-6 h-6' alt="" />
                                </div>
                                <span className='text-[14px] text-[#007BFF] font-[500] relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#007BFF] after:transition-all after:duration-300 group-hover:after:w-full'>
                                    Create ad
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 w-full md:mt-0 mt-[32px]">
                    <img
                        src="/images/meta/media.webp"
                        alt="Meta Platforms Illustration"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    )
}

export default AdsReachSection
