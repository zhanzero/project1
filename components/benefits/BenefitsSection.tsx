
const benefitCards = [
    {
        title: 'Improve ad performance',
        description: 'Maximise campaign results and simplify the setup process with advanced ad creation tools.',
        icon: '/images/icons/ic_performance.webp'
    },
    {
        title: 'Reach more people',
        description: 'Get ads to people most likely to be interested in your products or services with automated targeting tools.',
        icon: '/images/icons/ic_people.webp'
    },
    {
        title: 'Become an expert',
        description: (
            <>
                Upgrade your marketing skills with free online courses and certifications through <a href="https://www.facebook.com/business/learn" className="text-[#0064E0] hover:underline">Meta Blueprint.</a>
            </>
        ),
        icon: '/images/icons/ic_expert.webp'
    },
    {
        title: 'Get personalised ad solutions',
        description: 'See faster results in fewer steps with AI-enabled tools that generate ads your customers want to see.',
        icon: '/images/icons/ic_solutions.webp'
    },
    {
        title: 'Understand performance',
        description: 'Access advanced marketing performance tracking with detailed overviews of audience behaviour.',
        icon: '/images/icons/ic_understand.webp'
    },
    {
        title: 'Use ad formats that work',
        description: 'Designed to fit specific business goals, reach and expand your audience across every device.',
        icon: '/images/icons/ic_formats.webp'
    }
]

const BenefitsSection = () => {
    return (
        <div className='font-optimistic bg-white'>
            <div className='max-w-[1504px] mx-auto md:px-[32px] px-4'>
                <h2 className='md:text-[36px] text-[28px] font-[500] text-[#1C2B33] leading-[1.2]'>Explore how Meta technologies can help transform your business.</h2>
            </div>

            <div className='max-w-[1504px] mx-auto md:px-[32px] px-4 pt-[40px]'>
                <div className='flex flex-wrap -mx-3'>
                    {benefitCards.map((card, index) => (
                        <div key={index} className='w-full md:w-1/2 lg:w-1/3 px-4 md:pt-8 pt-4'>
                            <div className='bg-white rounded-[24px] md:p-[40px] p-6 border border-[#0A13171F] h-full flex flex-col'>
                                <div className='w-[84px] h-[84px] rounded-full flex items-center justify-center text-[#1C2B33] md:mb-6 mb-3 overflow-hidden'>
                                    <img src={card.icon} alt={card.title} className="w-full h-full object-cover" />
                                </div>
                                <div className='flex-grow'>
                                    <h3 className='md:text-[24px] text-[20px] text-[#0A1317] font-[500] md:mb-6 mb-3 leading-[1.2]'>{card.title}</h3>
                                    <div className='text-[16px] text-[#5D6C7B] leading-[1.5]'>{card.description}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default BenefitsSection