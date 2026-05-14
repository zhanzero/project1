'use client'
import React, { useRef, useState } from 'react'
import { Play, Pause, Search } from 'lucide-react'

const SupportSection = ({ handleOpendInfoModal }: { handleOpendInfoModal: () => void }) => {
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

    const handleOpendPrivacyPolicy = () => {
        handleOpendInfoModal();
    }

    return (
        <section className="bg-[#f6f6f6] py-[56px] md:px-0 px-4">
            <div className="max-w-[1504px] mx-auto flex md:flex-row flex-col items-center gap-16">
                {/* Left: Video & UI Mockup */}
                <div className="relative md:w-1/2 w-full flex justify-center md:order-1 order-2">
                    <div className="relative rounded-[24px] overflow-hidden aspect-[1/1] w-full bg-black group">
                        {/* The Video */}
                        <video
                            ref={videoRef}
                            src="/videos/support.mp4"
                            poster="/images/meta/thumb_support.webp"
                            className="w-full h-full object-cover opacity-95"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />

                        {/* Search Bar UI Overlay - Matching Design */}
                        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[70%] z-10">
                            <div className="bg-white rounded-[8px] py-4 px-6 shadow-[0_12px_40px_rgba(0,0,0,0.15)] flex items-center justify-between border border-transparent">
                                <span className="text-[#1C2B33] text-[18px] font-[500] whitespace-nowrap">Create a page</span>
                                <Search size={22} className="text-[#5D6C7B]" />
                            </div>
                        </div>

                        {/* Play/Pause Button Overlay */}
                        <div className="absolute bottom-6 right-6 z-20">
                            <button
                                onClick={togglePlay}
                                className="w-[32px] h-[32px] flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/40 rounded-full text-white transition-all hover:bg-white/40 active:scale-110"
                                aria-label={isPlaying ? 'Pause' : 'Play'}
                            >
                                {isPlaying ? (
                                    <Pause size={16} fill="white" strokeWidth={0} />
                                ) : (
                                    <Play size={16} fill="white" strokeWidth={0} className="ml-0.5" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="md:w-1/2 w-full md:order-2 order-1">
                    <div className="max-w-[500px]">
                        <p className="text-[12px] text-[#5D6C7B] uppercase tracking-wider mb-3 font-[500]">
                            Meta Business Help Centre
                        </p>
                        <h2 className="md:text-[40px] text-[32px] font-[500] text-[#1C2B33] leading-[1.2] mb-8">
                            Get answers to FAQ, plus help and support with troubleshooting business accounts.
                        </h2>

                        <div className="flex items-center gap-8" onClick={handleOpendPrivacyPolicy}>
                            <button className="bg-[#1877F2] hover:bg-[#166fe5] text-white px-8 py-3.5 rounded-full font-[600] text-[16px] transition-all active:scale-95 shadow-lg shadow-blue-500/20">
                                Get support
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SupportSection
