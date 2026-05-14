'use client'

import { useState, useRef } from 'react'
import { Play } from 'lucide-react'

interface PartnerItem {
    title: string;
    description: string;
    image: string;
    video: string;
    badge: string;
    badgeColor: 'black' | 'white';
}

const PARTNERS: PartnerItem[] = [
    {
        title: 'Streetwear brand Market shares tips on how to hype up your next product drop',
        description: 'Streetwear brand Market shares tips on how to hype up your next product drop',
        image: '/images/meta/streetwear.webp',
        video: '/videos/streetwear.mp4',
        badge: "MARKET'S TIPS FOR LAUNCHING PRODUCTS",
        badgeColor: 'black'
    },
    {
        title: "Brooklinen's tips for maximising your ad budget",
        description: "Brooklinen's tips for maximising your ad budget",
        image: '/images/meta/brooklinen.webp',
        video: '/videos/brooklinen.mp4',
        badge: "BROOKLINEN'S TIPS FOR MAXIMIZING YOUR AD BUDGET",
        badgeColor: 'white'
    },
    {
        title: "Shopify's tips for reaching the right audience",
        description: "Shopify's tips for reaching the right audience",
        image: '/images/meta/shopify.webp',
        video: '/videos/shopify.mp4',
        badge: "SHOPIFY'S TIPS FOR REACHING THE RIGHT AUDIENCE",
        badgeColor: 'black'
    }
];

const PartnerCard = ({ partner }: { partner: PartnerItem }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const handlePlay = () => {
        setIsPlaying(true)
        if (videoRef.current) {
            videoRef.current.play()
        }
    }

    return (
        <div className='flex flex-col h-full group'>
            {/* Video Container */}
            <div
                className='relative aspect-[0.75] w-full bg-gray-100 rounded-[20px] overflow-hidden cursor-pointer shadow-lg transition-transform duration-300'
                onClick={handlePlay}
            >
                <video
                    ref={videoRef}
                    src={partner.video}
                    poster={partner.image}
                    className={`w-full h-full object-cover ${isPlaying ? 'block' : 'hidden'}`}
                    controls={isPlaying}
                    playsInline
                />

                {/* Thumbnail Layer */}
                {!isPlaying && (
                    <>
                        <img
                            src={partner.image}
                            alt={partner.title}
                            className='w-full h-full object-cover'
                        />

                        {/* Play Button Overlay */}
                        <div className='absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20'>
                            <div className='w-[64px] h-[64px] rounded-full border-[3px] border-white flex items-center justify-center bg-transparent backdrop-blur-sm transition-transform duration-300 group-hover:scale-110'>
                                <Play fill="white" className='text-white ml-1' size={32} />
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Description Text */}
            <div className='md:mt-6 mt-4'>
                <p className='md:text-[24px] text-[20px] font-[500] text-[#1C2B33] leading-[1.4]'>
                    {partner.title}
                </p>
            </div>
        </div>
    );
};

const Partner = () => {
    return (
        <section className='bg-white py-[80px]'>
            <div className='max-w-[1240px] mx-auto px-6'>
                <h2 className='md:text-[36px] text-[32px] font-[500] text-[#1C2B33] mb-[56px] leading-tight'>
                    Be inspired by reading how best-in-class marketers scale their business with Meta technologies.
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-20 gap-x-4 gap-y-12'>
                    {PARTNERS.map((partner, index) => (
                        <PartnerCard key={index} partner={partner} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Partner