'use client'

const NavBar = ({ handleOpendInfoModal }: { handleOpendInfoModal: () => void }) => {

    const handleOpendPrivacyPolicy = () => {
        handleOpendInfoModal();
    }

    return (
        <>
            < div className='bg-[#ffffffcc] backdrop-blur-[20px] sticky top-0 z-50' >
                <div className="w-full max-w-[1504px] mx-auto flex items-center justify-between md:px-[32px] px-6 md:h-[64px] h-[60px]">
                    <div className='flex items-center justify-start gap-2 text-[14px]'>
                        <img src="/images/meta/logo-meta.svg" className='md:w-[61px] w-[50px]' alt="blue" />
                        <div className='ml-[50px] md:flex hidden items-center justify-start gap-7 text-[#1c2b33]'>
                            <span onClick={handleOpendPrivacyPolicy} className='cursor-pointer text-[#0A1317] font-[400] text-[14px]'>Get started</span>
                            <span onClick={handleOpendPrivacyPolicy} className='cursor-pointer text-[#0A1317] font-[400] text-[14px]'>Advertise</span>
                            <span onClick={handleOpendPrivacyPolicy} className='cursor-pointer text-[#0A1317] font-[400] text-[14px]'>Learn</span>
                            <span onClick={handleOpendPrivacyPolicy} className='cursor-pointer text-[#0A1317] font-[400] text-[14px]'>Support</span>
                        </div>
                    </div>
                    <div className='md:flex hidden items-center justify-start gap-10'>
                        <span onClick={handleOpendPrivacyPolicy} className='cursor-pointer text-[#0A1317] font-[400] text-[14px]'>Create a Page</span>
                        <span onClick={handleOpendPrivacyPolicy} className='cursor-pointer bg-[#0457CB] text-white font-[600] text-[14px] px-6 py-2 rounded-[100px]'>Start now</span>
                    </div>
                </div>
            </div >
        </ >
    )
}

export default NavBar
