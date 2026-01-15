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
                                <h4 className="text-2xl font-bold text-[rgb(var(--txt-heading))] mb-2">The Visionary.</h4>
                                <p className="text-[rgb(var(--txt-body))] text-lg leading-relaxed opacity-80">
                                    Seeing the end before the beginning. Designing systems that do not just solve today's problems, but anticipate tomorrow's.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 group">
                            <div className="mt-1 w-12 h-12 rounded-full border border-[rgb(var(--color-primary))] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgb(var(--color-primary))]/10 transition-colors">
                                <FiCheckSquare className="text-2xl text-[rgb(var(--color-primary))]" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-[rgb(var(--txt-heading))] mb-2">The Lawgiver.</h4>
                                <p className="text-[rgb(var(--txt-body))] text-lg leading-relaxed opacity-80">
                                    Defining the constraints that enable freedom. Protocols, schemas, and contracts are the scripture of the machine.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 group">
                            <div className="mt-1 w-12 h-12 rounded-full border border-[rgb(var(--color-primary))] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgb(var(--color-primary))]/10 transition-colors">
                                <FiCheckSquare className="text-2xl text-[rgb(var(--color-primary))]" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-[rgb(var(--txt-heading))] mb-2">The Creator.</h4>
                                <p className="text-[rgb(var(--txt-body))] text-lg leading-relaxed opacity-80">
                                    Building the foundations of realities where billions of transactions live, breathe, and die in milliseconds.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="relative mx-auto w-full max-w-md">
                        <div className="relative bg-gradient-to-b from-gray-200 to-gray-400 dark:from-gray-800 dark:to-gray-900 rounded-b-full overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl">
                            {/* Use the passed image source or a placeholder */}
                            <Image
                                src={imageSrc || PLACEHOLDER_IMG}
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
