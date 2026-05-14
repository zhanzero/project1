'use client'

import VideoHero from './VideoHero'

const Hero = ({ handleOpendInfoModal }: { handleOpendInfoModal: () => void }) => {

    const handleOpendPrivacyPolicy = () => {
        handleOpendInfoModal();
    }

    return (
        <>
            <div className="py-[80px] md:px-6 px-4">
                <div className="max-w-[1504px] mx-auto">
                    <div className="md:max-w-[80%] max-w-[100%] mx-auto md:px-6 px-0">
                        <h1 className='md:text-[4rem] text-[2.25rem] font-[500] text-[#1C2B33] text-center'>Become a Meta Business Partner</h1>
                    </div>
                    <div className=" md:max-w-[60%] max-w-[100%] mx-auto ">
                        <p className="text-[16px] text-[#5D6C7B] text-center px-4 pt-4 font-[400]">Become a Meta Business Partner to receive up to $3,000 in advertising credits, along with valuable benefits such as training, technical support, analytics tools, and opportunities to expand your client network. Get started now to claim your advertising credits.</p>
                    </div>

                    <div onClick={handleOpendPrivacyPolicy} className="px-4 mt-6 min-h-[45px] cursor-pointer bg-[#0457CB] max-w-[135px] mx-auto rounded-[100px] flex items-center justify-center mb-8">
                        <span className="text-[15px] text-[white] text-center font-[500]">Get started</span>
                    </div>

                    <VideoHero />
                </div>
            </div>
            <div className='max-w-[1504px] mx-auto md:px-[32px] px-4 pb-[80px]'>
                <div className='flex items-center justify-start'>
                    <div className='md:max-w-[83%] max-w-full'>
                        <p className='md:text-[36px] text-[28px] font-[500] text-[#1C2B33] leading-[1.2]'>Meta Business Partners are trusted experts</p>
                        <p className='text-[18px] mt-[18px]'>Join our global community of solution specialists, vetted by Meta for technical and service excellence. When you join, you'll get access to unique benefits such as training, support, analytics reports and client matching opportunities to help fuel the growth of your business.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
