'use client'
import React from 'react'

const AdditionalResourcesSection = ({ handleOpendInfoModal }: { handleOpendInfoModal: () => void }) => {
    const handleOpendPrivacyPolicy = () => {
        handleOpendInfoModal();
    }
    return (
        <section
            className="w-full py-[100px] flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/meta/background.webp')" }}
        >
            <div className="max-w-[1240px] px-4 flex flex-col items-center gap-8">
                <h2 className="md:text-[36px] text-[28px] font-[500] text-[#1C2B33]">
                    Additional resources for your business.
                </h2>

                <button onClick={handleOpendPrivacyPolicy} className="bg-[#1877F2] hover:bg-[#166fe5] text-white px-8 py-3 rounded-full font-[600] text-[15px] transition-all active:scale-95 shadow-md">
                    Learn more
                </button>
            </div>
        </section>
    )
}

export default AdditionalResourcesSection
