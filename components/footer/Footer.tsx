// components/Footer.tsx
import Link from 'next/link';
import { useState } from 'react';

const footerSections = [
    {
        title: 'Meta technologies',
        items: [
            { name: 'Facebook', href: '#' },
            { name: 'Instagram', href: '#' },
            { name: 'Messenger', href: '#' },
            { name: 'WhatsApp', href: '#' },
            { name: 'Audience Network', href: '#' },
            { name: 'Meta Quest', href: '#', external: true },
            { name: 'Workplace', href: '#', external: true },
            { name: 'Meta for Work', href: '#', external: true },
        ],
    },
    {
        title: 'Tools',
        items: [
            { name: 'Free tools', href: '#' },
            { name: 'Facebook Pages', href: '#' },
            { name: 'Instagram profiles', href: '#' },
            { name: 'Stories', href: '#' },
            { name: 'Shops', href: '#' },
            { name: 'Meta Business Suite', href: '#' },
            { name: 'Facebook ads', href: '#' },
            { name: 'Instagram ads', href: '#' },
            { name: 'Video ads', href: '#' },
            { name: 'Ads Manager', href: '#' },
        ],
    },
    {
        title: 'Goals',
        items: [
            { name: 'Set up a Facebook Page', href: '#' },
            { name: 'Build brand awareness', href: '#' },
            { name: 'Promote your local business', href: '#' },
            { name: 'Grow online sales', href: '#' },
            { name: 'Promote your app', href: '#' },
            { name: 'Generate leads', href: '#' },
            { name: 'Measure and optimise ads', href: '#' },
            { name: 'Retarget existing customers', href: '#' },
        ],
    },
    {
        title: 'Business types',
        items: [
            { name: 'Small business', href: '#' },
            { name: 'Large businesses', href: '#' },
            { name: 'Agency', href: '#' },
            { name: 'Media and publisher', href: '#', external: true },
            { name: 'Creator', href: '#', external: true },
            { name: 'Developer', href: '#' },
            { name: 'Business partner', href: '#' },
        ],
    },
    {
        title: 'Industries',
        items: [
            { name: 'Automotive', href: '#' },
            { name: 'Consumer packaged goods', href: '#' },
            { name: 'E-commerce', href: '#' },
            { name: 'Entertainment and media', href: '#' },
            { name: 'Financial services', href: '#' },
            { name: 'Gaming', href: '#' },
            { name: 'Property', href: '#' },
            { name: 'Restaurants', href: '#' },
            { name: 'Retail', href: '#' },
            { name: 'Technology and telecom', href: '#' },
            { name: 'Travel', href: '#' },
        ],
    },
    {
        title: 'Skills and training',
        items: [
            { name: 'Online learning', href: '#' },
            { name: 'Certification programmes', href: '#' },
            { name: 'Webinars', href: '#' },
        ],
    },
    {
        title: 'Guides and resources',
        items: [
            { name: 'Ads guide', href: '#' },
            { name: 'Brand safety and suitability', href: '#' },
            { name: '"Click Here" book', href: '#' },
            { name: 'Media responsibility', href: '#' },
            { name: 'Sitemap', href: '#' },
        ],
    },
];

export default function Footer() {
    const [openSections, setOpenSections] = useState<number[]>([]);

    const toggleSection = (index: number) => {
        setOpenSections(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <footer className="bg-[#1b2a34] text-gray-400">
            {/* Main content */}
            <div className="max-w-[1175px] mx-auto py-20 px-6">
                {/* Desktop grid - 4 cột trên lg, 3 cột trên md, 2 cột trên sm */}
                <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {footerSections.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="text-[#cbd2d9] text-[18px] mb-4 tracking-wide">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.items.map((item, itemIdx) => (
                                    <li key={itemIdx}>
                                        <Link
                                            href={item.href}
                                            className="text-gray-400 hover:text-gray-200 text-[13px] transition-colors"
                                            target={item.external ? '_blank' : undefined}
                                            rel={item.external ? 'noopener noreferrer' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Mobile - Accordion style */}
                <div className="md:hidden divide-y divide-gray-800">
                    {footerSections.map((section, idx) => (
                        <div key={idx} className="py-5">
                            <button
                                onClick={() => toggleSection(idx)}
                                className="flex justify-between items-center w-full text-left text-white font-medium"
                            >
                                <span className="text-[24px]">{section.title}</span>
                                <span className="text-xl transition-transform duration-200" style={{ transform: openSections.includes(idx) ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    <img src="/images/icons/ic_arrow_w.svg" alt="arrow" className='w-[20px] h-[20px]' />
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openSections.includes(idx) ? 'max-h-96 mt-4' : 'max-h-0'
                                    }`}
                            >
                                <ul className="space-y-3 pl-1">
                                    {section.items.map((item, itemIdx) => (
                                        <li key={itemIdx}>
                                            <Link
                                                href={item.href}
                                                className="text-gray-400 hover:text-gray-200 text-[18px] block"
                                                target={item.external ? '_blank' : undefined}
                                                rel={item.external ? 'noopener noreferrer' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-[#465A69] pt-12 text-sm mt-12">
                    <div className="flex flex-col md:flex-row sm:justify-between sm:items-start gap-6">
                        <div className="text-[#cbd2d9] text-[13px]">
                            © {new Date().getFullYear()} Meta
                            <div className="flex gap-3 text-[#cbd2d9] text-[13px] mt-4">
                                <img src="/images/icons/ic_facebook.svg" alt="flag" className='w-[24px] h-[24px]' />
                                <img src="/images/icons/ic_instagram.svg" alt="flag" className='w-[24px] h-[24px]' />
                                <img src="/images/icons/ic_x.svg" alt="flag" className='w-[24px] h-[24px]' />
                                <img src="/images/icons/ic_in.svg" alt="flag" className='w-[24px] h-[24px]' />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                            {['About', 'Developers', 'Careers', 'Privacy', 'Cookies', 'Terms', 'Help Centre'].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="text-[#cbd2d9] hover:text-gray-200 transition-colors md:text-[13px] text-[12px]"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </footer>
    );
}