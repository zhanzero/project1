'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, Pause } from 'lucide-react'

const FEATURES = [
    {
        title: 'Ads Manager',
        description: 'Create and track new ads, monitor your budget and increase sales across Facebook, Messenger, Instagram and WhatsApp – all from one place.',
        thumbnail: '/images/meta/ads_manager.webp',
        video: '/videos/ads_manager.mp4',
        link: 'Go to Ads Manager'
    },
    {
        title: 'Meta Business Suite',
        description: 'Use our free marketing solution for businesses to streamline content scheduling, messaging, insights and ad creation across Facebook and Instagram.',
        thumbnail: '/images/meta/business_suite.webp',
        video: '/videos/meta_business_suite.mp4',
        link: 'Go to Meta Business Suite'
    },
    {
        title: 'Meta pixel',
        description: 'Optimise campaign results by adding this piece of code to retarget ads based on actions that your customers take.',
        thumbnail: '/images/meta/meta_pixel.webp',
        video: '/videos/meta_pixel.mp4',
        link: 'Set up Meta pixel'
    },
    {
        title: 'Facebook Pages',
        description: 'Create a presence with Facebook Pages. Share information about your business, stay connected with Inbox for Messenger and view insights.',
        thumbnail: '/images/meta/facebook_pages.webp',
        video: '/videos/facebook_pages.mp4',
        link: 'Create a Facebook Page'
    },
    {
        title: 'AI tools (performance marketing)',
        description: 'Boost ad performance with single-step AI tools that maximise results across audience, ad placement, budget and conversion with Meta Advantage.',
        thumbnail: '/images/meta/ai_tool.webp',
        video: '/videos/ai_tool.mp4',
        link: ''
    },
]

export default function FeatureSection() {
    const [active, setActive] = useState(FEATURES[0])
    const [isTransitioning, setIsTransitioning] = useState(false)

    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(true)

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

    useEffect(() => {
        // Ensure autoplay works as expected
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented:", error)
                setIsPlaying(false)
            })
        }
    }, [active])

    /* mobile slider */
    const sliderRef = useRef<HTMLDivElement | null>(null)
    const [index, setIndex] = useState(0)

    const scrollToIndex = (i: number) => {
        if (!sliderRef.current) return
        const width = sliderRef.current.clientWidth
        sliderRef.current.scrollTo({
            left: width * i,
            behavior: 'smooth',
        })
        setIndex(i)
    }

    useEffect(() => {
        const el = sliderRef.current
        if (!el) return

        const onScroll = () => {
            const width = el.clientWidth
            const i = Math.round(el.scrollLeft / width)
            setIndex(i)
        }

        el.addEventListener('scroll', onScroll)
        return () => el.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div className='mt-[80px] bg-[#f6f6f6]'>
            <div className="max-w-[1504px] mx-auto py-[80px] md:px-[32px] px-4">
                <h1 className="md:text-[36px] text-[28px] font-[500] mb-[56px]">Gain access to tools that deliver results.</h1>

                {/* ================= DESKTOP ================= */}
                <div className="md:flex w-full items-stretch">
                    <div className="w-full md:max-w-[40%] max-w-[100%] md:mr-[80px] border-t">
                        {FEATURES.map((item) => (
                            <div
                                key={item.title}
                                onClick={() => {
                                    if (active.title !== item.title) {
                                        setIsTransitioning(true)
                                        setTimeout(() => {
                                            setActive(item)
                                            setIsTransitioning(false)
                                        }, 200)
                                    }
                                }}
                                className={`py-6 cursor-pointer border-b ${active.title === item.title ? 'text-[#1c2b33]' : 'text-gray-500 hover:text-black'}`}
                            >
                                <h3 className={`md:text-[20px] text-[#0A1317] text-[18px] ${active.title === item.title ? 'font-[500]' : 'font-[400]'} flex justify-between `}>
                                    {item.title}
                                    <img
                                        src={
                                            active.title === item.title
                                                ? '/images/icons/ic_apart.svg'
                                                : '/images/icons/ic_plus.svg'
                                        }
                                        className="w-8 h-8"
                                    />
                                </h3>

                                {active.title === item.title && (
                                    <div>
                                        <div className="md:hidden block my-6 w-full rounded-[32px] overflow-hidden">
                                            <div className="aspect-[0.75] max-w-[323px] relative w-full aspect-video rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                                                {/* Background Video */}
                                                {item.video.endsWith('.mp4') ? (
                                                    <video
                                                        key={item.video}
                                                        ref={videoRef}
                                                        className="w-full h-full object-cover"
                                                        src={item.video}
                                                        poster={item.thumbnail}
                                                        muted
                                                        loop
                                                        playsInline
                                                        autoPlay
                                                    />
                                                ) : (
                                                    <img
                                                        src={item.video}
                                                        className="w-full h-full object-cover"
                                                        alt={item.title}
                                                    />
                                                )}

                                                <div className="absolute bottom-6 right-6 z-10">
                                                    <button
                                                        onClick={togglePlay}
                                                        className="w-[32px] h-[32px] flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/40 rounded-full text-white hover:bg-white/40 active:scale-95 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)] group/btn"
                                                        aria-label={isPlaying ? 'Pause' : 'Play'}
                                                    >
                                                        {isPlaying ? (
                                                            <Pause size={16} fill="white" strokeWidth={0} className="transition-transform group-hover/btn:scale-110" />
                                                        ) : (
                                                            <Play size={16} fill="white" className="transition-transform group-hover/btn:scale-110" strokeWidth={0} />
                                                        )}
                                                    </button>
                                                </div>

                                                {/* Subtle Gradient Overlay */}
                                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-60" />
                                            </div>
                                        </div>

                                        <div className='md:max-w-[80%] max-w-[100%]'>
                                            <p className="py-[6px] my-4 text-gray-600 text-[#5D6C7B]"> {item.description} </p>
                                            <div className='flex items-center gap-2 cursor-pointer w-[fit-content] group'>
                                                <div className=' w-[32px] h-[32px] rounded-full border border-[#0A131773] flex items-center justify-center group-hover:border-[#007BFF] transition-all duration-300'>
                                                    <img src="/images/icons/ic_arrow_left.svg" className='w-6 h-6 group-hover:fill-[#007BFF]' alt="" />
                                                </div>
                                                <span className='text-[14px] text-[#007BFF] font-[500] relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#007BFF] after:transition-all after:duration-300 group-hover:after:w-full'>
                                                    Learn more
                                                </span>
                                            </div>
                                            {
                                                item.link && (
                                                    <div className='mt-1 flex items-center gap-2 cursor-pointer w-[fit-content] group'>
                                                        <div className=' w-[32px] h-[32px] rounded-full border border-[#0A131773] flex items-center justify-center group-hover:border-[#007BFF] transition-all duration-300'>
                                                            <img src="/images/icons/ic_arrow_left.svg" className='w-6 h-6' alt="" />
                                                        </div>
                                                        <span className='text-[14px] text-[#007BFF] font-[500] relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#007BFF] after:transition-all after:duration-300 group-hover:after:w-full'>
                                                            {item.link}
                                                        </span>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="md:block hidden w-full rounded-[32px] overflow-hidden">
                        <div className="md:aspect-[0.75] md:max-w-[470px] mx-auto relative w-full aspect-video rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                            {/* Background Video */}
                            {active.video.endsWith('.mp4') ? (
                                <video
                                    key={active.video}
                                    ref={videoRef}
                                    className="w-full h-full object-cover"
                                    src={active.video}
                                    poster={active.thumbnail}
                                    muted
                                    loop
                                    playsInline
                                    autoPlay
                                />
                            ) : (
                                <img
                                    src={active.video}
                                    className="w-full h-full object-cover"
                                    alt={active.title}
                                />
                            )}

                            <div className="absolute bottom-6 right-6 z-10">
                                <button
                                    onClick={togglePlay}
                                    className="w-[32px] h-[32px] flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/40 rounded-full text-white hover:bg-white/40 active:scale-95 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)] group/btn"
                                    aria-label={isPlaying ? 'Pause' : 'Play'}
                                >
                                    {isPlaying ? (
                                        <Pause size={16} fill="white" strokeWidth={0} className="transition-transform group-hover/btn:scale-110" />
                                    ) : (
                                        <Play size={16} fill="white" className="transition-transform group-hover/btn:scale-110" strokeWidth={0} />
                                    )}
                                </button>
                            </div>

                            {/* Subtle Gradient Overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-60" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}