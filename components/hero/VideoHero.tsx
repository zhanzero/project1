'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'

const VideoHero = () => {
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
    }, [])

    return (
        <div className="md:w-[60%] w-full mx-auto mt-[80px]">
            <div className="relative w-full aspect-video rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                {/* Background Video */}
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster="/images/meta/hero.webp"
                    muted
                    loop
                    playsInline
                    autoPlay
                >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                </video>

                <div className="absolute bottom-6 right-6 z-10">
                    <button
                        onClick={togglePlay}
                        className="w-[32px] h-[32px] flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/40 rounded-full text-white hover:bg-white/40 active:scale-95 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)] group/btn"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                        {isPlaying ? (
                            <Pause size={16} fill="white" strokeWidth={0} className="transition-transform group-hover/btn:scale-110" />
                        ) : (
                            <Play size={16} fill="white" className="ml-1 transition-transform group-hover/btn:scale-110" strokeWidth={0} />
                        )}
                    </button>
                </div>

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-60" />
            </div>
        </div>
    )
}

export default VideoHero
