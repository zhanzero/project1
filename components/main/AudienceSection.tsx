'use client'

import React from 'react'
import { Play, Pause } from 'lucide-react'

const AudienceSection = () => {

    const videoRef = React.useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = React.useState(true)
    const [activeIndex, setActiveIndex] = React.useState(0)

    const socialIcons = [
        { src: "/images/icons/ic_facebook_color.svg", alt: "Facebook" },
        { src: "/images/icons/ic_message_color.svg", alt: "Messenger" },
        { src: "/images/icons/ic_instagram_color.webp", alt: "Instagram" },
        { src: "/images/icons/ic_whatshap_color.svg", alt: "WhatsApp" },
    ]

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    React.useEffect(() => {
        // Ensure autoplay works as expected
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented:", error)
                setIsPlaying(false)
            })
        }
    }, [])

    return (
        <section className="bg-white py-[80px] md:px-0 px-4">
            <div className="max-w-[1240px] mx-auto">
                <div className="mb-10">
                    <p className="text-[12px] text-[#5D6C7B] uppercase tracking-wider mb-2">Meta technologies</p>
                    <h2 className="md:text-[36px] text-[32px] font-[500] text-[#1C2B33]">Stay connected to your audience.</h2>
                </div>

                <div className="flex md:flex-row flex-col gap-10 items-start">
                    {/* Social Sidebar - Desktop */}
                    <div
                        className="hidden md:min-w-[32px] md:flex flex-col gap-6 pt-20"
                    >
                        {socialIcons.map((icon, index) => (
                            <img
                                key={index}
                                src={icon.src}
                                alt={icon.alt}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={`w-[32px] h-[32px] cursor-pointer transition-all duration-300 ${activeIndex === index ? 'grayscale-0 opacity-100' : 'grayscale opacity-20'}`}
                            />
                        ))}
                    </div>

                    {/* Desktop/Tablet - Social Icons for Mobile */}
                    <div className="md:hidden flex gap-4 mb-8 w-full justify-center">
                        {socialIcons.map((icon, index) => (
                            <img
                                key={index}
                                src={icon.src}
                                alt={icon.alt}
                                onClick={() => setActiveIndex(index)}
                                className={`w-[32px] h-[32px] cursor-pointer transition-all duration-300 ${activeIndex === index ? 'grayscale-0 opacity-100' : 'grayscale opacity-20'}`}
                            />
                        ))}
                    </div>

                    {/* Video Player + Live UI */}
                    <div className="relative md:max-w-[504px] w-full md:px-4 px-0">
                        <div className=" rounded-[24px] overflow-hidden aspect-[3/4] group">
                            {/* The Video */}
                            <video
                                ref={videoRef}
                                src="/videos/fans.mp4"
                                poster="/images/meta/fans.webp"
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        </div>

                        <div className="absolute bottom-6 right-6 z-20">
                            <button
                                onClick={togglePlay}
                                className="w-[32px] h-[32px] flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/40 rounded-full text-white transition-all"
                                aria-label={isPlaying ? 'Pause' : 'Play'}
                            >
                                {isPlaying ? (
                                    <Pause size={16} fill="white" strokeWidth={0} className="transition-transform " />
                                ) : (
                                    <Play size={16} fill="white" className="transition-transform " strokeWidth={0} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-6 col-span-12 lg:pt-40 lg:pl-10">
                        <p className="text-[14px] text-[#5D6C7B] mb-2 font-[400]">Marketing on Facebook</p>
                        <h3 className="md:text-[36px] text-[32px] font-[500] text-[#1C2B33] leading-tight mb-4">
                            Find fans and build a following.
                        </h3>
                        <p className="text-[16px] text-[#5D6C7B] mb-8 leading-relaxed">
                            Create lasting relationships with customers everywhere by marketing with Facebook.
                        </p>

                        <div className="flex items-center gap-3 text-[#0457CB] font-[500] cursor-pointer group w-fit">
                            <div className='flex items-center gap-2 cursor-pointer w-[fit-content] group'>
                                <div className=' w-[32px] h-[32px] rounded-full border border-[#0A131773] flex items-center justify-center group-hover:border-[#007BFF] transition-all duration-300'>
                                    <img src="/images/icons/ic_arrow_left.svg" className='w-6 h-6' alt="" style={{ transform: 'scaleX(-1)' }} />
                                </div>
                                <span className='text-[14px] text-[#007BFF] font-[500] relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#007BFF] after:transition-all after:duration-300 group-hover:after:w-full'>
                                    Explore Facebook
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AudienceSection
