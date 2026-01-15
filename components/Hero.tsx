import Link from 'next/link';
import { FiArrowDown } from 'react-icons/fi';
import Button from "./Button";
import { sanityImg } from "@/sanity/sanity-utils";
import Image from "next/image";

interface HeroProps {
    heading: string;
    tagline: string;
}

export default function Hero({ heading, tagline }: HeroProps) {
    return (
        <section className="col-span-full relative pt-32 pb-20 overflow-hidden">
            <div className="responsive-wrapper grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="flex flex-col gap-8 text-center md:text-left z-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-[rgb(var(--txt-heading))] leading-[1]">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--color-primary))] to-purple-600">Architect</span>
                    </h1>

                    <div className="h-px w-24 bg-gradient-to-r from-[rgb(var(--color-primary))] to-transparent mx-auto md:mx-0 opacity-50" />

                    <p className="text-[rgb(var(--txt-body))] text-xl md:text-2xl max-w-3xl mx-auto md:mx-0 font-light leading-relaxed">
                        "Information is power. But like all power, there are those who want to keep it for themselves."
                        <span className="block mt-4 text-lg opacity-70 italic">- Inspired by Aaron Swartz.</span>
                    </p>

                    {/* Cosmic Background Element */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[rgb(var(--color-primary))]/20 blur-[120px] animate-pulse" />
                        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-900/20 blur-[100px] animate-pulse delay-1000" />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 mt-6 justify-center md:justify-start relative z-10">
                        <Button href="#projects" className="px-8 py-4 text-lg shadow-[0_0_20px_-5px_rgba(var(--color-primary),0.5)] hover:shadow-[0_0_30px_-5px_rgba(var(--color-primary),0.8)] transition-all duration-500 bg-[rgb(var(--color-primary))] text-white border-none hover:scale-105">
                            Witness the Work
                        </Button>
                        <Button
                            href="mailto:contact@aaronazadi.com"
                            btnType="secondary"
                            className="px-8 py-4 text-lg border-white/20 hover:border-[rgb(var(--color-primary))]/50 hover:bg-[rgb(var(--color-primary))]/10 backdrop-blur-md transition-all duration-500"
                        >
                            Consult the Oracle
                        </Button>
                    </div>
                </div>

                {/* Visual / 3D Placeholder */}
                <div className="relative h-[400px] w-full flex items-center justify-center">
                    {/* Plain background as requested */}

                    {/* Mock Keyboard/Mouse Visual using CSS shapes for now */}
                    <div className="relative w-full max-w-md aspect-video bg-gray-800/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl p-6 flex flex-col justify-end transform rotate-y-12 transition-transform hover:rotate-0 duration-500">
                        {/* Fake Keys */}
                        <div className="grid grid-cols-10 gap-1 mb-4 opacity-50">
                            {[...Array(40)].map((_, i) => (
                                <div key={i} className="h-8 rounded bg-gray-700/50" />
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <div className="h-12 w-32 bg-gray-600/50 rounded-lg"></div>
                        </div>

                        <div className="absolute -right-12 bottom-12 w-20 h-32 bg-gray-800 dark:bg-gray-900 rounded-3xl border border-white/10 shadow-xl" />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce text-[rgb(var(--txt-muted))]">
                <FiArrowDown size={24} />
            </div>
        </section>
    );
}
