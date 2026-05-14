"use client";

export default function FooterSubscribe() {
    return (
        <footer className="bg-[#1b2a34] text-white">
            <div className="max-w-[1175px] mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                {/* Left */}
                <div>
                    <h2 className="text-3xl font-semibold leading-snug mb-4">
                        Get the latest updates from Meta for business.
                    </h2>

                    <p className="text-gray-300 max-w-md">
                        Provide your email address to receive the latest updates from Meta
                        for business, including news, events and product updates.
                    </p>
                </div>

                {/* Right */}
                <div className="w-full max-w-xl">
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full px-4 py-3 rounded-lg text-black outline-none h-52px text-[#465a69] text-[16px]"
                        />

                        <input
                            type="text"
                            placeholder="Enter a country name..."
                            className="w-full px-4 py-3 rounded-lg text-black outline-none h-52px text-[#465a69] text-[16px]"
                        />
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed mb-4">
                        By submitting this form, you agree to receive marketing related
                        electronic communications from Meta, including news, events, updates
                        and promotional emails. You may withdraw your consent and
                        unsubscribe from these at any time, for example, by clicking the
                        unsubscribe link included in our emails. For more information about
                        how Meta handles your data, please read our{" "}
                        <span className="underline cursor-pointer">Data Policy</span>.
                    </p>

                    <button className='bg-[#0062ff] text-white px-6 h-[50px] flex items-center justify-center rounded-full font-[600] text-[15px]'>
                        Subscribe
                    </button>
                </div>

            </div>

            <div className="border-t border-white/20" />
        </footer>
    );
}
