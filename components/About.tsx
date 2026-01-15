import { IconType } from "react-icons";
import { FiCheckSquare } from "react-icons/fi";
import Image from "next/image";

// Placeholder image if Sanity image is missing or for the newly designed section
const PLACEHOLDER_IMG = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";

interface AboutProps {
    content: any; // PortableText value
    imageSrc?: string;
}

export default function About({ content, imageSrc }: AboutProps) {
    return (
        <section className="col-span-full py-24" id="about">
            <div className="responsive-wrapper flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-[rgb(var(--txt-heading))] mb-2">
                    I Bring Order to <span className="text-[rgb(var(--color-primary))]">Entropy</span>
                </h2>
                <p className="text-[rgb(var(--txt-body))] mb-20 text-xl font-light opacity-80 max-w-2xl">
                    Chaotic systems are destined to fail. I impose structure upon the void.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center text-left">

                    {/* Checklist Area */}
                    <div className="flex flex-col gap-12">
                        <div className="flex gap-6 group">
                            <div className="mt-1 w-12 h-12 rounded-full border border-[rgb(var(--color-primary))] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgb(var(--color-primary))]/10 transition-colors">
                                <FiCheckSquare className="text-2xl text-[rgb(var(--color-primary))]" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-[rgb(var(--txt-heading))] mb-2">The Liberator.</h4>
                                <p className="text-[rgb(var(--txt-body))] text-lg leading-relaxed opacity-80">
                                    Breaking down walls. Making knowledge the property of the many, not the few.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 group">
                            <div className="mt-1 w-12 h-12 rounded-full border border-[rgb(var(--color-primary))] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgb(var(--color-primary))]/10 transition-colors">
                                <FiCheckSquare className="text-2xl text-[rgb(var(--color-primary))]" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-[rgb(var(--txt-heading))] mb-2">The Activist.</h4>
                                <p className="text-[rgb(var(--txt-body))] text-lg leading-relaxed opacity-80">
                                    Encoding justice into the system layer. fighting for open access and digital rights.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 group">
                            <div className="mt-1 w-12 h-12 rounded-full border border-[rgb(var(--color-primary))] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgb(var(--color-primary))]/10 transition-colors">
                                <FiCheckSquare className="text-2xl text-[rgb(var(--color-primary))]" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-[rgb(var(--txt-heading))] mb-2">The Architect.</h4>
                                <p className="text-[rgb(var(--txt-body))] text-lg leading-relaxed opacity-80">
                                    Building decentralization into the very DNA of the web.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="relative mx-auto w-full max-w-md">
                        <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-gray-900/50 backdrop-blur-sm">
                            <Image
                                src="/avatar_cosmic.png"
                                alt="The Architect"
                                fill
                                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            {/* Overlay gradient for mystery */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-bg))] via-transparent to-transparent opacity-60" />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[rgb(var(--color-primary))]/20 blur-3xl rounded-full opacity-30 animate-pulse" />
                    </div>

                </div>
            </div>
        </section>
    );
}
