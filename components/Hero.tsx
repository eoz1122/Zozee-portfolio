import Link from 'next/link';
import { FiArrowDown } from 'react-icons/fi';

interface HeroProps {
    heading: string;
    tagline: string;
}

export default function Hero({ heading, tagline }: HeroProps) {
    return (
        <section className="col-span-full relative pt-32 pb-20 overflow-hidden">
            <div className="responsive-wrapper grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="flex flex-col gap-6 text-center md:text-left z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[rgb(var(--txt-heading))] leading-[1.1]">
                        System <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--color-primary))] to-purple-500">Architect</span>
                    </h1>

                    <div className="font-mono text-[rgb(var(--txt-link))] text-lg">
                        &#123; Kubernetes, AWS, Go, Python, Terraform, Microservices... &#125;
                    </div>

                    <p className="text-[rgb(var(--txt-body))] text-lg md:text-xl max-w-lg mx-auto md:mx-0">
                        Designing scalable, resilient, and cloud-native distributed systems for high-growth enterprises.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
                        <Link href="#projects" className="btn-primary inline-flex items-center justify-center">
                            See my dev work
                        </Link>
                        <Link href="/Richard-Acquaye_CV.pdf" target="_blank" className="btn-secondary inline-flex items-center justify-center">
                            Download CV
                        </Link>
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
